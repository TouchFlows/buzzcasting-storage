#!/usr/bin/env bash
# Fail when a repository's shared secret-scan pin lags the guard's main.
#
# A caller pins both the reusable workflow and the guard it fetches to one commit,
# which is what stops a change on the guard's main from running in other
# repositories' CI. The cost is that a guard fix does not reach those repositories
# until the pin is bumped, and nothing about a green build says the pin is old.
# This makes that visible: it compares the pinned commit with the guard's current
# main and fails when they differ.
#
# Usage: check-guard-pin.sh <caller-workflow> <guard-main-sha>
# Exit: 0 current, 1 stale, 2 malformed pin (including a missing pin).
set -uo pipefail

file="${1:-}"
main="${2:-}"
if [ -z "$file" ] || [ -z "$main" ]; then
	echo "usage: check-guard-pin.sh <caller-workflow> <guard-main-sha>" >&2
	exit 2
fi
if [ ! -f "$file" ]; then
	echo "check-guard-pin: no workflow at $file" >&2
	exit 2
fi

# Full 40-character hex only: a branch name or a short SHA is not a pin, and
# @main in particular is the mutable reference this check exists to catch.
pinned=$(sed -nE 's#.*secret-scan\.yml@([0-9a-f]{40}).*#\1#p' "$file" | head -1)
guard_ref=$(sed -nE 's#^[[:space:]]*guard-ref:[[:space:]]*([0-9a-f]{40})[[:space:]]*$#\1#p' "$file" | head -1)

if [ -z "$pinned" ]; then
	echo "check-guard-pin: $file does not pin secret-scan.yml to a 40-character commit" >&2
	exit 2
fi
if [ -z "$guard_ref" ]; then
	echo "check-guard-pin: $file does not pass guard-ref, so the guard is fetched from a moving ref" >&2
	exit 2
fi
if [ "$guard_ref" != "$pinned" ]; then
	echo "check-guard-pin: $file runs the workflow at ${pinned:0:7} but fetches the guard at ${guard_ref:0:7}" >&2
	echo "  they must match, or old logic runs against new scripts" >&2
	exit 2
fi
if [ "$pinned" = "$main" ]; then
	echo "check-guard-pin: current (${pinned:0:7})"
	exit 0
fi

echo "check-guard-pin: pinned ${pinned:0:7}; the guard's main is ${main:0:7}" >&2
echo "  this repository is running an older guard. bump both references in $file:" >&2
echo "    gh api repos/TouchFlows/buzzcasting-storage/commits/main --jq .sha" >&2
echo "  then put that SHA after secret-scan.yml@ and in guard-ref" >&2
exit 1
