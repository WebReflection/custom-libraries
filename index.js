self.customLibraries = (function (exports) {
  'use strict';

  var Lie = typeof Promise === 'function' ? Promise : function (fn) {
    var queue = [],
        resolved = 0,
        value;
    fn(function ($) {
      value = $;
      resolved = 1;
      queue.splice(0).forEach(then);
    });
    return {
      then: then
    };

    function then(fn) {
      return resolved ? setTimeout(fn, 0, value) : queue.push(fn), this;
    }
  };

  var create = Object.create;
  var defined = create(null);
  var registry = create(null);
  var define = function define(lib, value) {
    if (lib in registry) throw new Error('duplicated ' + lib);
    whenDefined(lib);

    defined[lib]._(registry[lib] = value);
  };
  var get = function get(lib) {
    return registry[lib];
  };
  var whenDefined = function whenDefined(lib) {
    if (!(lib in defined)) {
      var _,
          $ = new Lie(function ($) {
        _ = $;
      });

      defined[lib] = {
        _: _,
        $: $
      };
    }

    return defined[lib].$;
  };

  exports.define = define;
  exports.get = get;
  exports.whenDefined = whenDefined;

  return exports;

}({}));
