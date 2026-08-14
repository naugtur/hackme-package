# bin-confusion

![](./pentest.png)

> ⚠️ Not intended for actual use.  
> You can use this package to pentest your own applications to see if they are vulnerable to supply chain attacks.

This package demonstrates a supply chain attack where a malicious package is published to the npm registry with a bin field that defines CLI commands colliding with locally installed npm CLI. 

The malicious package will be called instead of npm in the project scripts, like:

```json
{
  "scripts": {
    "test": "npm run lint && npm run unit",
  }
}
```

## Intent

This package is not a hacking tool. It lets the developer check if their setup is vulnerable and can be used for security demonstrations.
