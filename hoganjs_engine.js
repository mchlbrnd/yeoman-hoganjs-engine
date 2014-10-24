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

var engine = module.exports = function (beginDelimiter, endDelimiter) {
  var me = this;

  this.setDelimiter = function(beginDelimiter, endDelimiter) {
    me._beginDelimiter = beginDelimiter || '{{';
    me._endDelimiter = endDelimiter || '}}';
    return me.engine;
  };

  this.engine = function (sourceTemplate, data) {
    return hogan
      .compile(sourceTemplate, {delimiters: me._beginDelimiter + ' ' + me._endDelimiter})
      .render(_.extend(_sHelpers, data));
  };

  this.engine.detect = function(sourceTemplate) {
    return sourceTemplate.indexOf(me._beginDelimiter) > -1;
  };

  return this.setDelimiter(beginDelimiter, endDelimiter);
};
