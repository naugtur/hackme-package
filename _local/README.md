# What's in here

- a sink server to demonstrate the hacks
- a verdaccio setup to host the evil packages on a localhost mirror 

All you should need to do is run `start.sh`

## Verdaccio

packages are already cached in storage/
htpasswd contains one user 
`user:s3cret`

## Sink server

The `demo-cc` server will print the captured payloads 

Remove `--headless` if you want them to pop up in your default text editor.