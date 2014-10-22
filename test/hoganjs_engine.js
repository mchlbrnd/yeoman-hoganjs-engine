var yeoman = require('yeoman-generator'),
  helpers = yeoman.test,
  assert = yeoman.assert,
  hoganjsEngine = require('../'),
  path = require('path').join(__dirname);

describe('yeoman-hoganjs-engine', function () {
  var hulk = 'Hello I am Hulk Hogan',
    hulkTpl = '{{hulk}}';

  describe('without directives in a template', function () {
    it('should return false', function () {
      assert(!hoganjsEngine.detect(hulk));
    });
  });

  describe('with directives in a template', function () {
    it('should return true', function () {
      assert(hoganjsEngine.detect(hulkTpl));
    });
  });

  describe('as an engine for a generator', function () {
    var Generator = yeoman.generators.Base.extend({
      initializing: function () {
        this.sourceRoot(path + '/templates');
      },

      writing: function () {
        this.hulk = hulk;

        this.copy('_hulk.txt', 'hulk.txt');
        this.copy('_hulk_classify.txt', 'hulk_classify.txt');
      }
    });

    before(function (done) {
      helpers.testDirectory(path + './out/', function (error) {
        if (error) return done(error);

        helpers
          .createGenerator('dummy', [[Generator, 'dummy']], [], {engine: hoganjsEngine})
          .run({}, done);
      });
    });

    it('should create a generated template', function () {
      assert.fileContent('hulk.txt', /Hello I am Hulk Hogan/);
    });

    it('should create a generated template with classify', function () {
      assert.fileContent('hulk_classify.txt', /HelloIAmHulkHogan/);
    });
  });
});
