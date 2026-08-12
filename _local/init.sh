#!/bin/bash

# Install verdaccio globally if not installed
if ! command -v verdaccio &> /dev/null; then
    npm install --ignore-scripts -g verdaccio
fi

# Create verdaccio config in _local directory
cat > config.yaml <<EOF
storage: ./storage
auth:
  htpasswd:
    file: ./htpasswd
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
packages:
  '@selfpentest/*':
    access: \$all
    publish: \$authenticated
  '**':
    access: \$all
    proxy: npmjs
log:
  - {type: stdout, format: pretty, level: http}
EOF
