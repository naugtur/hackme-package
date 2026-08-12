#!/bin/bash

# Authenticate with local verdaccio (accepts any credentials)
# npm adduser --registry http://localhost:4873
# complain less
# npm set ca null

# Publish all packages to local verdaccio
cd ../bundled-lies
npm publish --registry http://localhost:4873

cd ../bundled-lies-gyp
npm publish --registry http://localhost:4873

cd ../notpasswdstrength
npm publish --registry http://localhost:4873

cd ../pentest-my-ci
npm publish --registry http://localhost:4873
