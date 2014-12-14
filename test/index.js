var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('generator koc', function () {

  var options = {
    'skip-message': true,
    'skip-install': true
  };

  before(function(done) {
    helpers.testDirectory(path.join(__dirname, 'tmp-test'), function () {
      this.koc = helpers.createGenerator('koc', ['../../app']);
      this.koc.options = options;
      done();
    }.bind(this));
  });

  it('should create expected files', function (done) {
    this.koc.run({}, function() {
      assert.file([
        'index.js',
        'README.md',
        '.jshintrc',
        '.gitignore',
        'gulpfile.js',
        'package.json',
        'views/index.jade',
        'src/style/main.scss',
        'src/script/index.js',
        'model/model.js'
      ]);

      assert.fileContent([
        ['README.md', /# tmp-test/],
        ['package.json', /"name": "tmp-test"/],
        ['views/index.jade', /title tmp-test/],
        ['model/model.js', /var db = monk\('localhost\/tmp-test'\)/]
      ]);

      done();
    });
  });
});
