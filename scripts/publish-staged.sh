#!/usr/bin/env bash
set -euo pipefail

EXPECTED_USER="selfpentest"
ACTUAL_USER="$(npm whoami)"

if [ "$ACTUAL_USER" != "$EXPECTED_USER" ]; then
  echo "Error: npm whoami returned '$ACTUAL_USER', expected '$EXPECTED_USER'" >&2
  exit 1
fi

for pkg_dir in packages/*/; do
  echo "Staging $pkg_dir..."
  npm stage publish --workspace "$pkg_dir" || echo "Skipping $pkg_dir"
  
done
