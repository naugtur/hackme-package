#!/bin/bash

# Authenticate with local verdaccio (accepts any credentials)
npm whoami --registry http://localhost:4873 
if [ $? -ne 0 ]; then
    echo "need to configure user:s3cret for local verdaccio"
    npm adduser --registry http://localhost:4873 
fi

cd ../packages
# Publish all packages to local verdaccio
for package_dir in */; do
    (
        cd "$package_dir" || exit
        npm unpublish --force --registry http://localhost:4873 || true
        npm publish --registry http://localhost:4873
    )
done
