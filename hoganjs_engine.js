var _ = require('underscore.string'),
  hogan = require('hogan.js');

module.exports = function () {
  this.engine = function (source, data) {
    return hogan
      .compile(source)
      .render(Object.keys(_)
        .reduce(function (o, h) {
          var _helper = _[h];
          if (typeof _helper == 'function') { // skip non functions
            data[h] = function () {
              return function (template) {
                return _helper.call(this, hogan.compile(template).render(this));
              };
            };
          }
          return o;
        }, data));
  };

  this.engine.detect = function (source) {
    return template.indexOf('{{') > -1;
  };

  return this;
};
