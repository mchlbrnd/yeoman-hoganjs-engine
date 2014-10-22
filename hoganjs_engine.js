var _     = require('underscore'),
    _s    = require('underscore.string'),
    hogan = require('hogan.js');

var _sHelpers = Object.keys(_s)
  .reduce(function (o, h) {
    var _helper = _s[h];
    if (typeof _helper == 'function') { // skip non functions
      o[h] = function () {
        return function (template) {
          return _helper.call(this, hogan.compile(template).render(this));
        };
      };
    }
    return o;
  }, {});

var engine = module.exports = function engine(sourceTemplate, data) {
  return hogan.compile(sourceTemplate).render(_.extend(_sHelpers, data));
};

engine.detect = function (sourceTemplate) {
  return sourceTemplate.indexOf('{{') > -1;
};
