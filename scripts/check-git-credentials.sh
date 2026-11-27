#!/usr/bin/env bash
# Fail if a repository in the workspace carries credentials.
#
# Two places a token hides where review never looks:
#   - .git/config is untracked, so a token in a remote URL leaks silently and
#     survives in shell history and backups;
#   - tracked file contents travel with every clone and every published package,
#     so a committed token is public the moment it is pushed.
# Both are scanned, and both reports redact the secret: a check that echoes the
# token into a terminal or CI log would spread the very thing it is guarding.
#
# Usage: scripts/check-git-credentials.sh [workspace-root]
#   default root: the parent of this repository (the workspace holding the repos)
# Exit: 0 clean, 1 credentials found, 2 no .git/config found at all (bad root).

set -uo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root="${1:-$(cd "$script_dir/../.." && pwd)}"

if [ ! -d "$root" ]; then
	echo "check-git-credentials: no such directory: $root" >&2
	exit 2
fi

# user:password@host, token-as-user@host, x-access-token style, and raw PATs.
#
# Written so the pattern does not match its own source: a check that flags this
# file cannot scan its own repository. `x[-]access[-]token:` matches the literal
# in a URL but not the bracketed text below, and the same holds for the classes.
pattern='https?://[^/@[:space:]]+@|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|x[-]access[-]token:'

# One redaction rule for both sources, so neither can drift into echoing a value.
redact() {
	sed -E 's#(https?://)[^/@[:space:]]+@#\1<redacted>@#g; s#(gh[pousr]_|github_pat_)[A-Za-z0-9_]+#\1<redacted>#g'
}

found=0
repos=0
while IFS= read -r config; do
	repos=$((repos + 1))
	repo=$(dirname "$(dirname "$config")")

	if hits=$(grep -nE "$pattern" "$config"); then
		found=$((found + 1))
		echo "credential in ${config}:" >&2
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
