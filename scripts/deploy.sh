#!/bin/sh
# this is after the build succeeds
rm -rf .git/
git init
git config --global user.email "$USER@$HOST"
git config --global user.name $USER
git checkout --orphan gh-pages
git remote add upstream "https://$GH_TOKEN@github.com/brngdsn/brstck.git"
git add .
git commit -m "deploy"
git push upstream gh-pages --force --quiet > /dev/null 2>&1
