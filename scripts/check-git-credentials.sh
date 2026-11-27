#!/usr/bin/env bash
# Fail if any .git/config under the workspace embeds credentials in a URL.
#
# Tokens in remote URLs live in .git/config, which is not tracked by Git, so no
# code review or CI checkout can ever see them - they leak silently and survive
# in shell history and backups. This walks every repository in the workspace and
# reports the offending line with the secret redacted.
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
pattern='https?://[^/@[:space:]]+@|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|x-access-token:'

found=0
repos=0
while IFS= read -r config; do
	repos=$((repos + 1))
	if hits=$(grep -nE "$pattern" "$config"); then
		found=$((found + 1))
		echo "credential in ${config}:" >&2
		printf '%s\n' "$hits" |
			sed -E 's#(https?://)[^/@[:space:]]+@#\1<redacted>@#g; s#(gh[pousr]_|github_pat_)[A-Za-z0-9_]+#\1<redacted>#g' >&2
	fi
done < <(find "$root" -maxdepth 4 -type f -path '*/.git/config' 2>/dev/null | sort)

if [ "$repos" -eq 0 ]; then
	echo "check-git-credentials: no .git/config found under $root" >&2
	exit 2
fi

if [ "$found" -gt 0 ]; then
	echo "check-git-credentials: $found of $repos repositories embed credentials; strip them and revoke the tokens." >&2
	exit 1
fi

echo "check-git-credentials: clean ($repos repositories checked)"
