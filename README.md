# yeoman-hoganjs-engine 

[![NPM version](https://badge.fury.io/js/yeoman-hoganjs-engine.png)](http://badge.fury.io/js/yeoman-hoganjs-engine) [![Build Status](https://travis-ci.org/mchlbrnd/yeoman-hoganjs-engine.png)](https://travis-ci.org/mchlbrnd/yeoman-hoganjs-engine)

### [Hogan.js]('http://twitter.github.io/hogan.js/') templating engine with [Underscore.string]('http://epeli.github.io/underscore.string/') support for [Yeoman]('http://yeoman.io/').

```sh
> npm install yeoman-hoganjs-engine
```

### Adding Hogan.js engine to your Yeoman generator
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

### Using it!
**Inside your generator template**
```html
Follow us at
{{#tweets}}
 <a href="http://twitter.com/{{name}}/>@{{name}}</a>
{{/tweets}}
```
**Inside your generator action**
```javascript
...
writing: function () {
  this.tweets = [
      { name: 'michaelwolbert' },
      { name: 'hoganjs' },
      { name: 'yeoman' }
    ];
  this.template('_template.hogan', 'template.html');
}
...

```

**Using Underscore.string**
```html
{{#classify}}{{myClass}}{{/classify}}

```
If myClass = 'myClass', then the above template would output MyClass. See below for supported Underscore.string functions.

### Underscore.string
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
