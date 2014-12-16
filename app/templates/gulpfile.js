var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bower = require('main-bower-files');

gulp.task('style', function () {

  gulp.src('src/style/main.scss')
    .pipe($.plumber())
    .pipe($.sass())
    .pipe(gulp.dest('public/style'));
});

gulp.task('script', function () {

  browserify('./src/index.js')
    .bundle()
    .pipe($.plumber())
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/script'));
});

gulp.task('vendor', function () {

  gulp.src(bower())
    .pipe($.plumber())
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest('public/script'));
});

gulp.task('nodemon', function () {

  $.nodemon({
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

  $.watch('src/style/**/*.scss', function () {
    gulp.start('style');
  });

  $.watch('src/script/**/*.js', function () {
    gulp.start('script');
  });

  $.watch('bower_components/**/*.js', function () {
    gulp.start('vendor');
  });
});
