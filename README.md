# Tools for testing yourself against some attacks

Currently:

- supply chain via postinstall scripts in CI

## How to defend

> The goal of this repository is not to show things are dangerous, but prove security-related actions need to be taken. 

You can disable all lifecycle scripts in your package manager configuration. (`pnpm` does it by default since v10)

Use [@lavamoat/allow-scripts](https://www.npmjs.com/package/@lavamoat/allow-scripts) to safely run the scripts you need and get help configuring your package manager.

