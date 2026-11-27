#!/usr/bin/env bash
# Fail if a repository in the workspace carries credentials.
#
# Three layers, cheapest first:
#   1. .git/config: a token in a remote URL is untracked, so it leaks silently
#      and survives in shell history and backups;
#   2. token shapes in the index: what a push publishes, matched with a plain
#      grep so an obvious PAT is reported even if gitleaks is broken;
#   3. gitleaks over a snapshot of the index: provider keys and generic
#      high-entropy assignments the shape patterns cannot know about.
# Every report either redacts or omits the value, because a check that echoes the
# secret spreads the very thing it guards.
#
# Usage: scripts/check-git-credentials.sh [workspace-root] [repository]
#   default root: the parent of this repository (the workspace holding the repos)
#   repository:   content-scan only this one. The hook passes the repository
#                 being pushed, since that is what this push publishes; without
#                 it every repository under root is scanned.
# Exit: 0 clean, 1 credentials found, 2 bad root, 3 scanner unavailable.

set -uo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root="${1:-$(cd "$script_dir/../.." && pwd)}"
only_repo="${2:-}"

if [ ! -d "$root" ]; then
	echo "check-git-credentials: no such directory: $root" >&2
	exit 2
fi

# user:password@host, token-as-user@host, x-access-token style, and raw PATs.
# Written so the pattern does not match its own source: a check that flags this
# file cannot scan its own repository.
pattern='https?://[^/@[:space:]]+@|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|x[-]access[-]token:'

# One redaction rule for every textual report, so none can drift into echoing.
redact() {
	sed -E 's#(https?://)[^/@[:space:]]+@#\1<redacted>@#g; s#(gh[pousr]_|github_pat_)[A-Za-z0-9_]+#\1<redacted>#g'
}

# Resolve gitleaks: an explicit override, then PATH, then the copy this machine
# keeps untracked inside the repository.
gitleaks_bin="${GITLEAKS_BIN:-}"
if [ -z "$gitleaks_bin" ]; then
	gitleaks_bin=$(command -v gitleaks 2>/dev/null || true)
fi
if [ -z "$gitleaks_bin" ] && [ -x "$script_dir/../.tools/gitleaks" ]; then
	gitleaks_bin="$script_dir/../.tools/gitleaks"
fi

# A fresh clone has no scanner. Install the pinned build rather than blocking the
# first push: the script verifies the release checksum, and CI installs through
# the same script, so every machine ends up with the same binary.
if [ -z "$gitleaks_bin" ] && [ -f "$script_dir/install-gitleaks.sh" ]; then
	echo "check-git-credentials: gitleaks not found; installing the pinned version" >&2
	if bash "$script_dir/install-gitleaks.sh" >&2; then
		gitleaks_bin="$script_dir/../.tools/gitleaks"
	fi
fi

config="$script_dir/gitleaks.toml"

# Fail closed. A secret scan that quietly disables itself when its tool is absent
# is the failure this check exists to prevent.
if [ -z "$gitleaks_bin" ] || [ ! -x "$gitleaks_bin" ] || [ ! -f "$config" ]; then
	echo "check-git-credentials: gitleaks or its config is missing; cannot scan tracked files." >&2
	echo "  install: https://github.com/gitleaks/gitleaks/releases (or set GITLEAKS_BIN)" >&2
	echo "  expected config: $config" >&2
	exit 3
fi

found=0
repos=0

# An allowlist pattern that matches no tracked file is a stale exemption: the file
# it covered was moved or deleted, and the pattern now protects nothing while
# looking active. Warn instead of blocking - the push is still scanned, and a
# pattern may legitimately arrive before the file it covers.
warn_stale_allowlist() {
	local repo="$1" fragment="$repo/.gitleaks-allowlist.toml"
	[ -f "$fragment" ] || return 0
	command -v python3 >/dev/null 2>&1 || return 0
	python3 - "$fragment" "$repo" <<'PY' >&2
import re, subprocess, sys, tomllib

fragment, repo = sys.argv[1], sys.argv[2]
try:
    config = tomllib.load(open(fragment, 'rb'))
except Exception as error:
    print(f"check-git-credentials: cannot parse {fragment}: {error}", file=sys.stderr)
    raise SystemExit(0)

files = [f for f in subprocess.run(
    ['git', '-C', repo, 'ls-files'], capture_output=True, text=True).stdout.split('\n') if f]

for pattern in config.get('allowlist', {}).get('paths', []):
    try:
        match = re.compile(pattern)
    except re.error as error:
        print(f"check-git-credentials: allowlist pattern {pattern!r} is not a valid regex: {error}", file=sys.stderr)
        continue
    if not any(match.search(name) for name in files):
        print(f"check-git-credentials: warning: allowlist pattern {pattern!r} matches no tracked file in {repo}; the exemption is stale", file=sys.stderr)
PY
}

# Scan one repository's index - exactly the content a push publishes - by
# extracting it and running gitleaks over the files. The working tree is not
# scanned: untracked scratch files are not published, and node_modules would
# bury the signal.
scan_repo() {
	local repo="$1" tree work report rc
	tree=$(git -C "$repo" write-tree 2>/dev/null) ||
		tree=$(git -C "$repo" rev-parse --verify -q 'HEAD^{tree}' 2>/dev/null) ||
		return 0

	work=$(mktemp -d)
	report=$(mktemp)
	if ! git -C "$repo" archive --format=tar "$tree" 2>/dev/null | tar -x -C "$work" 2>/dev/null; then
		rm -rf "$work" "$report"
		return 0
	fi

	# A repository can allowlist paths it does not own - vendored bundles, fixtures
	# - by dropping a `[allowlist]` fragment next to its code. Path allowlists
	# survive an upgrade of the vendored file; `.gitleaksignore` fingerprints pin a
	# line number and silently stop matching when the file shifts.
	scan_config=$(mktemp)
	cat "$config" > "$scan_config"
	if [ -f "$repo/.gitleaks-allowlist.toml" ]; then
		cat "$repo/.gitleaks-allowlist.toml" >> "$scan_config"
	fi

	( cd "$work" && "$gitleaks_bin" dir . --no-banner --redact --config "$scan_config" \
		--report-format json --report-path "$report" >/dev/null 2>&1 )
	rc=$?

	if [ "$rc" -eq 1 ]; then
		found=$((found + 1))
		echo "credential in tracked files of ${repo}:" >&2
		if command -v python3 >/dev/null 2>&1; then
			python3 - "$report" <<'PY' >&2
import json, sys
for finding in json.load(open(sys.argv[1])):
    print(f"  {finding['File']}:{finding['StartLine']}: {finding['RuleID']}")
PY
		else
			echo "  $(grep -c '"RuleID"' "$report") finding(s); install python3 to list them" >&2
		fi
	elif [ "$rc" -gt 1 ]; then
		echo "check-git-credentials: gitleaks failed on ${repo} (exit $rc); doing it manually:" >&2
		echo "  $gitleaks_bin dir ${repo} --config ${scan_config}" >&2
		rm -rf "$work" "$report" "$scan_config"
		return 3
	fi

	rm -rf "$work" "$report" "$scan_config"
	return 0
}

while IFS= read -r config_path; do
	repos=$((repos + 1))
	repo=$(dirname "$(dirname "$config_path")")

	if hits=$(grep -nE "$pattern" "$config_path"); then
		found=$((found + 1))
		echo "credential in ${config_path}:" >&2
		printf '%s\n' "$hits" | redact >&2
	fi

	# `--cached` scans the index, which is exactly what a push publishes, and
	# leaves untracked scratch files alone. A repository with no commits and
	# nothing staged exits non-zero without matching; that is not a finding.
	if hits=$(git -C "$repo" grep --cached -n -I -E "$pattern" -- . 2>/dev/null); then
		found=$((found + 1))
		echo "credential in tracked files of ${repo}:" >&2
		printf '%s\n' "$hits" | redact >&2
	fi

	if [ -z "$only_repo" ] || [ "$(cd "$repo" 2>/dev/null && pwd -P)" = "$(cd "$only_repo" 2>/dev/null && pwd -P)" ]; then
		warn_stale_allowlist "$repo"
		scan_repo "$repo" || exit 3
	fi
done < <(find "$root" -maxdepth 4 -type f -path '*/.git/config' 2>/dev/null | sort)

if [ "$repos" -eq 0 ]; then
	echo "check-git-credentials: no .git/config found under $root" >&2
	exit 2
fi

if [ "$found" -gt 0 ]; then
	echo "check-git-credentials: $found leak(s) across $repos repositories; remove them and revoke the tokens." >&2
	exit 1
fi

echo "check-git-credentials: clean ($repos repositories checked)"
