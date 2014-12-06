var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('style', function () {
  gulp.src('public/style/main.scss')
    .pipe($.plumber())
    .pipe($.sass())
    .pipe(gulp.dest('public/style'));
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'index.js',
    execMap: {
      js: "node --harmony"
    },
    watch: [
      "index.js",
      "views/",
      "public/",
      "model/",
      "lib/"
    ]
  });
});

gulp.task('default', ['nodemon'], function () {
  $.watch('public/style/**/*.scss', function () {
    gulp.start('style');
  });
});
