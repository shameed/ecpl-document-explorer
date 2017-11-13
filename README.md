# ecpl document explorer
[![Build Status](https://travis-ci.org/shameed/ecpl-document-explorer.svg?branch=master)](https://travis-ci.org/shameed/ecpl-document-explorer)
[![codecov](https://codecov.io/gh/shameed/ecpl-document-explorer/branch/master/graph/badge.svg)](https://codecov.io/gh/shameed/ecpl-document-explorer)
[![npm version](https://badge.fury.io/js/ecpl-document-explorer.svg)](http://badge.fury.io/js/ecpl-document-explorer)
[![devDependency Status](https://david-dm.org/shameed/ecpl-document-explorer/dev-status.svg)](https://david-dm.org/shameed/ecpl-document-explorer?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/shameed/ecpl-document-explorer.svg)](https://github.com/shameed/ecpl-document-explorer/issues)
[![GitHub stars](https://img.shields.io/github/stars/shameed/ecpl-document-explorer.svg)](https://github.com/shameed/ecpl-document-explorer/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shameed/ecpl-document-explorer/master/LICENSE)

## Demo
https://shameed.github.io/ecpl-document-explorer/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

angular2 library for Document explorer and upload

## Installation

Install through npm:
```
npm install --save ecpl-document-explorer
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { EcplDocumentExplorerModule } from 'ecpl-document-explorer';

@NgModule({
  imports: [
    EcplDocumentExplorerModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/shameed/ecpl-document-explorer/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ecpl-document-explorer/bundles/ecpl-document-explorer.umd.js"></script>
<script>
    // everything is exported ecplDocumentExplorer namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://shameed.github.io/ecpl-document-explorer/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
