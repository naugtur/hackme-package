# pentest-my-ci

A package that warns you about the risks of installing from npm with the postinstall scripts enabled.

## Usage 
```
npm install -D @naugtur/pentest-my-ci
```

Once installed, the package will break your build if it's not secure and display scary but helpful information.

## Intent

This package is not a hacking tool. It lets the developer check if their build is vulnerable without making the upfront effrot to learn about the supply chain with postinstall scripts. All it does is print a warning. Hopefully a convincing one :)