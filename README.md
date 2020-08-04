# customLibraries

[![Build Status](https://travis-ci.com/WebReflection/custom-libraries.svg?branch=master)](https://travis-ci.com/WebReflection/custom-libraries) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/custom-libraries/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/custom-libraries?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

A customElements like registry for user-land libraries.

Based on [Some Web Components Hints](https://medium.com/@WebReflection/some-web-components-hint-75dce339ac6b), but without polluting the `customElements` registry.

Compatible down to IE9 (with `setTimeout` polyfill) and every other browser, for a total of 272 bytes once minified and gzipped.

```js
import {define, get, whenDefined} from 'custom-libraries';
// const {define, get, whenDefined} = require('custom-libraries');
// <script src="//unpkg.com/custom-libraries">customLibraries</script>

whenDefined('my-lib').then(myLib => {
  // myLib is defined and passed along
  // get('my-lib') === myLib
});

setTimeout(() => {
  define('my-lib', {any: 'value'});
});
```