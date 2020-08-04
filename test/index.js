let customLibraries = require('../cjs');
test();

function test() {
  const {define, get, whenDefined} = customLibraries;
  const lib = {};
  define('abc', lib);
  console.assert(get('abc') === lib);
  whenDefined('abc').then($ => {
    console.assert($ === lib);
    try {
      define('abc', {});
      console.assert(false, 'it should throw an error');
    }
    catch(e) {
      console.log('OK', e.message);
    }
  });
}
