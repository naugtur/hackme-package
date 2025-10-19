# bundled-lies

A package that warns you about the risks of running selected scripts when lifecycle scripts are disabled

## Usage 
```
npm install -D @selfpentest/bundled-lies
```

After you install it alongside `bcrypt` with lifecycle scripts turned off, and attempt to run the build for bcrypt, you'll notice the warning if you're doing it with a tool that trusts made up names in package.json

eg.
```

```

## Intent

This package is not a hacking tool. It lets the developer check if their setup is vulnerable without making the upfront effrot to learn about the supply chain with postinstall scripts. All it does is print a warning. Hopefully a convincing one :)