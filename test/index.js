var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('generator koc', function () {

  var options = {
    'skip-message': true,
    'skip-install': true
  };

  before(function(done) {
    helpers.testDirectory(path.join(__dirname, 'tmp'), function () {
      this.koc = helpers.createGenerator('koc', ['../../app']);
      this.koc.options = options;
      done();
    }.bind(this));
  });

  it('should create expected files', function (done) {
    this.koc.run({}, function() {
      assert.file([
        'index.js',
        'package.json',
        'nodemon.json',
        'views/index.jade',
        'public/style/main.css',
        'public/script/index.js'
      ]);

      assert.fileContent([
        ['package.json', /"name": "tmp"/],
        ['views/index.jade', /title tmp/]
      ]);

      done();
    });
  });
});
