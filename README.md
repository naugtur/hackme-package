![](./pentest.png)

# SelfPentest

**_Tools for testing yourself against supply-chain attacks_**


package | description
 --- | ---
 @selfpentest/pentest-my-ci | Breaks insecure CI installs with a scary postinstall warning.
 @selfpentest/notpasswdstrength | Pretends to be a password strength package and to leak the password.
 @selfpentest/bundled-lies | Checks whether your setup will run a made-up package build when you selectively allow lifecycle.
 @selfpentest/eslint-pentest-plugin | Pretends to be an eslint plugin and leaks secrets during linting.
 @selfpentest/webpack-plugin | Pretends to be a webpack plugin and leaks secrets during the build.
 
---

### How to defend

The goal of this repository is not to show things are dangerous, but prove security-related actions need to be taken. 

**Use [@lavamoat/harden](https://lavamoat.github.io/guides/harden/) to configure your project.**

### Example

See the `examples/project-vulnerable` project for a demonstration of how supply chain attacks can be executed. You can try out `@lavamoat/harden` and experiment with setting the permissions yourself, or apply the patch in `examples/project-vulnerable/mitigation/fix.patch` to see the complete setup.