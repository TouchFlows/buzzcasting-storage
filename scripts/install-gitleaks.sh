#!/usr/bin/env bash
# Install the gitleaks binary the credential guard needs.
#
# Pinned version and a verified checksum, so a fresh clone and CI get exactly the
# same scanner and a tampered download is refused. The default destination is the
# repository's untracked .tools/ directory; pass --dir to put it on PATH instead
# (CI does that).
#
# Usage: scripts/install-gitleaks.sh [--dir <destination>] [--quiet]
# Exit: 0 installed or already current, 1 download/verify/extract failed.

set -euo pipefail

version=8.30.1
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
dir=""
quiet=0
while [ "$#" -gt 0 ]; do
	case "$1" in
	--dir)
		dir="${2:?--dir needs a value}"
		shift 2
		;;
	--quiet)
		quiet=1
		shift
		;;
	*)
		echo "install-gitleaks: unknown argument: $1" >&2
		exit 2
		;;
	esac
done
dir="${dir:-$script_dir/../.tools}"

say() { [ "$quiet" -eq 1 ] || echo "install-gitleaks: $*" >&2; }

if [ -x "$dir/gitleaks" ] && "$dir/gitleaks" version 2>/dev/null | grep -qx "$version"; then
	say "gitleaks $version already installed at $dir"
	exit 0
fi

case "$(uname -m)" in
x86_64 | amd64) arch=x64 ;;
arm64 | aarch64) arch=arm64 ;;
armv7l) arch=armv7 ;;
armv6l) arch=armv6 ;;
*)
	echo "install-gitleaks: unsupported architecture: $(uname -m)" >&2
	exit 1
	;;
esac
os=$(uname -s | tr '[:upper:]' '[:lower:]')

asset="gitleaks_${version}_${os}_${arch}.tar.gz"
base="https://github.com/gitleaks/gitleaks/releases/download/v${version}"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

say "downloading $asset"
if ! curl -fsSL --retry 3 --max-time 120 "$base/$asset" -o "$tmp/$asset" ||
	! curl -fsSL --retry 3 --max-time 60 "$base/gitleaks_${version}_checksums.txt" -o "$tmp/checksums.txt"; then
	echo "install-gitleaks: download failed from $base" >&2
	exit 1
fi

expected=$(awk -v a="$asset" '$2 == a { print $1 }' "$tmp/checksums.txt")
if [ -z "$expected" ]; then
	echo "install-gitleaks: $asset is not listed in the release checksums" >&2
	exit 1
fi

# macOS ships shasum, most Linux images ship sha256sum.
if command -v sha256sum >/dev/null 2>&1; then
	actual=$(sha256sum "$tmp/$asset" | awk '{ print $1 }')
else
	actual=$(shasum -a 256 "$tmp/$asset" | awk '{ print $1 }')
fi

if [ "$expected" != "$actual" ]; then
	echo "install-gitleaks: checksum mismatch for $asset" >&2
	echo "  expected $expected" >&2
	echo "  actual   $actual" >&2
	exit 1
fi

mkdir -p "$dir"
tar -xzf "$tmp/$asset" -C "$dir" gitleaks
chmod +x "$dir/gitleaks"
say "installed gitleaks $version at $dir/gitleaks"
