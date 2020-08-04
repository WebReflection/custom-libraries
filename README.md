# customLibraries

[![Build Status](https://travis-ci.com/WebReflection/custom-libraries.svg?branch=master)](https://travis-ci.com/WebReflection/custom-libraries) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/custom-libraries/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/custom-libraries?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

<sup>**Social Media Photo by [Matteo Maretto](https://unsplash.com/@matmaphotos) on [Unsplash](https://unsplash.com/)**</sup>

A [customElements](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry) like registry for user-land libraries.

Based on [Some Web Components Hints](https://medium.com/@WebReflection/some-web-components-hint-75dce339ac6b) post idea, but without polluting the `customElements` registry.

Compatible down to IE10, or even IE9 (with `setTimeout` polyfill), and every other browser, for a total of 272 bytes once minified and gzipped.

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
