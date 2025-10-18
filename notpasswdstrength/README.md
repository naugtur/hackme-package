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

# License

Production use of this software is not allowed. Can be distributed and experimented with freely. See LICENSE.md for jargon.

