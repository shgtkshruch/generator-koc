var path = require('path');
var assert = require('assert');
var helpers = require('yeoman-generator').test;

describe('generator koc', function () {

  describe('run generator', function () {
    
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, './.tmp'))
        .on('end', done);
    });

    it('should create expected files', function (done) {
      assert.file(['index.js']);
      done();
    });
  });
});
