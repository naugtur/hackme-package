# notpasswordstrength

![](./pentest.png) 

> ⚠️ Not intended for actual use.  
> You can use this package to pentest your own aplications to see if they are vulnerable to supply chain attacks.

An example package for training that pretends to be a password strength meter, but then also _pretends_ to send the password off to a hacker.

- version 1.0.0 is innocent
- version 1.1.0 is pretending to steal the password by sending a request to example.com but it doesn't actually even capture the password passed to it.

## pretended usage

```js
const { checkPasswordStrengthIncorrectly } = require('@selfpentest/notpasswordstrength');
const result = checkPasswordStrengthIncorrectly('password123');
console.log(result); 
```


## Intent

This package is not a hacking tool. It lets the developer check if their setup is vulnerable and can be used for security demonstrations.