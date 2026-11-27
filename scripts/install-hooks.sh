#!/usr/bin/env bash
# Install the credential guard as a pre-push hook in every repository in the
# workspace. Idempotent: re-running refreshes the links.
#
# A stale `core.hooksPath` silently disables .git/hooks entirely, so a repo can
# look protected and run nothing. This clears such values when they are dead
# leftovers (no husky dependency), and refuses loudly when a live hook manager
# owns the directory, rather than pretending the guard is installed.
#
# Usage: scripts/install-hooks.sh [workspace-root]
#   default root: the parent of this repository.

set -uo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root="${1:-$(cd "$script_dir/../.." && pwd)}"
hook="$script_dir/pre-push"

[ -f "$hook" ] || {
	echo "install-hooks: missing $hook" >&2
	exit 2
}

count=0
released=0
skipped=0
while IFS= read -r gitdir; do
	repo=$(dirname "$gitdir")
	hooks_path=$(git -C "$repo" config --get core.hooksPath 2>/dev/null || true)

	if [ -n "$hooks_path" ]; then
		if grep -qs '"husky"' "$repo/package.json"; then
			echo "install-hooks: SKIP $repo - husky owns $hooks_path/pre-push; add the guard there yourself" >&2
			skipped=$((skipped + 1))
			continue
		fi
		git -C "$repo" config --unset core.hooksPath
		echo "install-hooks: cleared stale core.hooksPath=$hooks_path (no husky dependency) in $(basename "$repo")"
		released=$((released + 1))
	fi

	target="$gitdir/hooks/pre-push"
	mkdir -p "$gitdir/hooks"
	# Preserve any real hook already there (symlinks are ours, skip the backup).
	if [ -e "$target" ] && [ ! -L "$target" ]; then
		mv "$target" "$target.local.bak"
		echo "install-hooks: backed up existing hook to $target.local.bak"
	fi
	ln -sfn "$hook" "$target"
	count=$((count + 1))
done < <(find "$root" -maxdepth 4 -type d -name .git 2>/dev/null | sort)

if [ "$count" -eq 0 ]; then
	echo "install-hooks: no repositories received the hook under $root" >&2
	exit 2
fi

echo "install-hooks: linked pre-push in $count repositories (stale hooksPath cleared in $released, skipped $skipped)"
