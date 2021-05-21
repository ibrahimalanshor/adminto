#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run doc

# navigate into the build output directory
cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ibrahimalanshor/adminto.git master:gh-pages

cd -