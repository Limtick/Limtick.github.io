#!/usr/bin/env sh

set -e

npm run build

cd ./.deploy_git

git init
git add -A
git commit -m 'update'

git push -f git@github.com:Limtick/Limtick.github.io.git master

cd -