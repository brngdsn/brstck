#!/bin/sh
# this is after the build succeeds
rm -rf .git/
git init
git config --global user.email "$USER@$HOST"
git config --global user.name $USER
git checkout --orphan gh-pages
git remote add upstream "https://$GH_TOKEN@github.com/brngdsn/brstck.git"
git add .
git add -f app/
git add -f node_modules/es6-shim/es6-shim.min.js
git add -f node_modules/systemjs/dist/system-polyfills.js
git add -f node_modules/angular2/es6/dev/src/testing/shims_for_IE.js
git add -f node_modules/angular2/bundles/angular2-polyfills.js
git add -f node_modules/systemjs/dist/system.src.js
git add -f node_modules/rxjs/bundles/Rx.js
git add -f node_modules/angular2/bundles/angular2.dev.js
git add -f node_modules/angular2/bundles/router.dev.js
git commit -m "deploy"
git push upstream gh-pages --force --quiet > /dev/null 2>&1
