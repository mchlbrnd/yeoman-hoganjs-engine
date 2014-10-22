# yeoman-hoganjs-engine 

[![NPM version](https://badge.fury.io/js/yeoman-hoganjs-engine.png)](http://badge.fury.io/js/yeoman-hoganjs-engine) [![Build Status](https://travis-ci.org/mchlbrnd/yeoman-hoganjs-engine.png)](https://travis-ci.org/mchlbrnd/yeoman-hoganjs-engine)

==============

## [Hogan.js]('http://twitter.github.io/hogan.js/') templating engine with [Underscore.string]('http://epeli.github.io/underscore.string/') support for [Yeoman]('http://yeoman.io/').

```sh
> npm install yeoman-hoganjs-engine
```

### Adding the engine to your Yeoman generator:
```javascript
var engine = require('yeoman-hoganjs-engine'),
    HulkHoganGenerator = yeoman.generators.NamedBase.extend({
      constructor: function(args, opts, config) {
        opts.engine = engine;
        yeoman.generators.NamedBase.apply(this, args, opts);
      },
      ...
};
```
###  Underscore.string support

**Supported functions**
* isBlank
* stripTags
* capitalize
* clean
* chars
* swapCase
* escapeHTML
* unescapeHTML
* escapeRegExp
* join (Array based)
* lines
* reverse
* succ
* titleize
* camelize
* underscored
* dasherize
* classify
* humanize
* trim
* ltrim
* rtrim
* words
* slugify
* quote || q
* unquote
* strip
* lstrip
* rstrip

**Unsupported functions**
* chop
* count
* splice
* insert
* include
* startsWith
* endsWith
* pad
* lpad
* rpad
* lrpad
* sprintf
* vsprintf
* toNumber
* numberFormat
* strRight
* strRightBack
* strLeft
* strLeftBack
* toSentence
* toSentenceSerial
* surround
* exports
* repeat
* naturalCmp
* levenshtein
* toBoolean
* center
* rjust
* ljust
* toBool
