# @selfpentest/webpack-plugin

![](./pentest.png) 

> ⚠️ Not intended for actual use.  
> You can use this package to pentest your own applications to see if they are vulnerable to supply chain attacks.

Pretends to be a useful webpack plugin that adds a build banner, but exfiltrates environment secrets during the build.

## Usage 
```
npm install -D @selfpentest/webpack-plugin
```

During the build, the plugin will demonstrate exfiltrating environment variables and the first 30 characters of `.ssh/known_hosts` to a server listening on `http://localhost:1337/`

## Intent

This package is not a hacking tool. It lets the developer check if their build is vulnerable without making the upfront effort to learn about the supply chain with postinstall scripts. All it does is print a warning. Hopefully a convincing one :)