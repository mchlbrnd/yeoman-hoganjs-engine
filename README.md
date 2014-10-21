yeoman-hoganjs-engine [![NPM version](https://badge.fury.io/js/yeoman-hoganjs-engine.png)](http://badge.fury.io/js/yeoman-hoganjs-engine)
==============

Hogan.js templating engine for Yeoman with underscore.string support.

```sh
> npm install yeoman-hoganjs-engine
```

Adding the engine to your Yeoman generator:
```javascript
var hoganjsEngine = require('yeoman-hoganjs-engine');

var HulkHoganGenerator = yeoman.generators.Base.extend({
  constructor: function(args, opts, config) {
    options.engine = hoganjsEngine;
    yeoman.generators.Base.apply(this, args, opts);
  },
  ...
}
```

Unfortunately, not all underscore.string functions are supported. Below you can find a list with Hogan.js templating examples.

TODO

TODO: add tests
