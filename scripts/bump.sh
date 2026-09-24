#!/usr/bin/env bash
set -euo pipefail



for pkg_dir in packages/*/; do
  echo "Bumping $pkg_dir..."
  cd "$pkg_dir"
  npm version patch --git-tag-version=false
  cd -
  
done
