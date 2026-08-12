# What's in here

- a sink server to demonstrate the hacks
- a verdaccio setup to host the evil packages on a localhost mirror 

All you should need to do is run `start.sh`

## Verdaccio

packages are already cached in storage/
htpasswd contains one user 
`user:s3cret`

## Sink server

The sink server will print to the console but also open captured payloads in your default text file viewer app, if it can.
