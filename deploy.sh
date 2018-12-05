#!/usr/bin/env sh

set -e

npm run build

cd ./.deploy_git

git init
git add -A
git commit -m 'deploy'

git push -f "https://${access_token}@github.com/Limtick/Limtick.github.io.git" master

cd -