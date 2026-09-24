#!/bin/bash

# start the sink server for demonstrating hacks
node ../packages/demo-cc/index.mjs --headless &

# Install verdaccio globally if not installed
if ! command -v verdaccio &> /dev/null; then
    npm install --ignore-scripts -g verdaccio
fi
# Start verdaccio with local config
verdaccio --config ./config.yaml
