#!/usr/bin/env bash
set -euo pipefail



for pkg_dir in packages/*/; do
  cd "$pkg_dir"
  npm pkg get version
  cd -
  
done
