# demo-cc

![](./pentest.png) 

> ⚠️ Not intended for actual use.  
> You can use this package to pentest your own applications to see if they are vulnerable to supply chain attacks.

A tiny local HTTP server that receives a payload and displays it in the terminal or opens it in the default text editor.

This is intended for local demonstration and testing scenarios with other packages from the `@selfpentest` scope.

## Usage 

```
$ demo-cc
listening on http://localhost:1337
Anything sent to this server will be opened in your default text editor
```
```
$ demo-cc --headless
listening on http://localhost:1337
Anything sent to this server will be displayed here in the terminal
```

It accepts:

- GET requests: payload is taken from the URL path
- POST requests: payload is taken from the request body

When a payload arrives, it:

- prints it to the console
- optionally opens it in the default editor or text viewer using the system default handler

The port is not configurable to indicate that it's not a serious tool for hackers :) 


## Intent

This package is not a hacking tool. It lets the developer check if their setup is vulnerable without making the upfront effort to learn about the supply chain and command-and-control servers. All it does is show text for demo purposes.