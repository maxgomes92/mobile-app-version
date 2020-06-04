# Mobile App Version

## [![NPM version](https://img.shields.io/npm/v/mobile-app-version.svg?style=flat)](https://www.npmjs.com/package/mobile-app-version) [![NPM monthly downloads](https://img.shields.io/npm/dm/mobile-app-version.svg?style=flat)](https://npmjs.org/package/mobile-app-version) [![NPM total downloads](https://img.shields.io/npm/dt/mobile-app-version.svg?style=flat)](https://npmjs.org/package/is-odd)

This small library fetches HTML page from Play Store and App Store, parses and returns your app version.

This is useful when in your hybrid app you want find out if the running version is or not the latest so you can prompt a message suggesting an update.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save mobile-app-version
```

## Usage

### For Android:

```js
import { getAndroidVersion } from 'mobile-app-version'

getAndroidVersion('my.app.package').then(version => {
  // Returns semantic version as string
  // e.g. '0.0.1'
})
```

### For iOS:

```js
import { getIosVersion } from 'mobile-app-version'

getAndroidVersion('id123456789').then(version => {
  // Returns semantic version as string
  // e.g. '0.0.1'
})
```

### License

Copyright © 2020, [Max Gomes](https://github.com/maxgomes92).
Released under the [MIT License](LICENSE).

***
