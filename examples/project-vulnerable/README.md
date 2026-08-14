# project-vulnerable

This is a demonstration project that is vulnerable to supply chain attacks. It uses packages from the `@selfpentest` namespace to demonstrate how supply chain attacks can be executed and how to defend against them.

## Running the demonstration

1. setup

Start local registry and hacker's sink server
```bash
cd _local
./start.sh
```

2. run the vulnerable project

Be prepared to see a text editor pop up with demonstrations of collected env variables and the first 30 characters of `.ssh/known_hosts` as proof they could be stolen.

```bash
cd examples/project-vulnerable
npm i
npm test
npm run deploy
```

3. view the mitigated state

Normally, you'd need to run `@lavamoat/harden` and configure the script permissions, but for demonstration purposes, the finished state of that is saved as `mitigation/fix.patch`. You can apply it to the project to see how it mitigates the attacks.

```bash
cd examples/project-vulnerable
git apply ./mitigation/fix.patch
```

And the attacks are mitigated.