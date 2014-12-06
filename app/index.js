var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  app: function () {
    this.copy('index.js', 'index.js');
    this.copy('gitignore', '.gitignore');
    this.copy('package.json', 'package.json');
    this.copy('nodemon.json', 'nodemon.json');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gulpfile.js', 'gulpfile.js');
    this.directory('views');
    this.directory('src');
    this.mkdir('public');
    this.mkdir('model');
    this.mkdir('lib');
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install']
    });
  }
});
