# brstck

for bro stacking

[![wercker status](https://app.wercker.com/status/3f6907da84c3d4955532def1708d5a40/m "wercker status")](https://app.wercker.com/project/bykey/3f6907da84c3d4955532def1708d5a40)

# usage

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run ntsc` - runs the new TypeScript compiler once.
* `npm run ntsc:w` - runs the new TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.
