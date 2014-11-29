var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  koa: function () {
    this.copy('index.js', 'index.js');
  }
});
