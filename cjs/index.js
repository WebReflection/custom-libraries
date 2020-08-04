'use strict';
const Lie = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@webreflection/lie'));

const {create} = Object;

const defined = create(null);
const registry = create(null);

const define = (lib, value) => {
  if (lib in registry)
    throw new Error('duplicated ' + lib);
  whenDefined(lib);
  defined[lib]._(registry[lib] = value);
};
exports.define = define;

const get = lib => registry[lib];
exports.get = get;

const whenDefined = lib => {
  if (!(lib in defined)) {
    let _, $ = new Lie($ => { _ = $; });
    defined[lib] = {_, $};
  }
  return defined[lib].$;
};
exports.whenDefined = whenDefined;
