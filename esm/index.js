import Lie from '@webreflection/lie';

const {create} = Object;

const defined = create(null);
const registry = create(null);

export const define = (lib, value) => {
  if (lib in registry)
    throw new Error('duplicated ' + lib);
  whenDefined(lib);
  defined[lib]._(registry[lib] = value);
};

export const get = lib => registry[lib];

export const whenDefined = lib => {
  if (!(lib in defined)) {
    let _, $ = new Lie($ => { _ = $; });
    defined[lib] = {_, $};
  }
  return defined[lib].$;
};
