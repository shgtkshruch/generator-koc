var gulp = require('gulp');
var $ = require('gulp-load-plugin')();

gulp.task('style', function () {
  $.watch('./src/style/**/*.scss')
    .pipe($.plumber())
    .pipe(gulp.src('./src/style/main.scss'))
    .pipe($.sass())
    .pipe(gulp.dest('./public/style'));
});

gulp.task('default', function () {
  gulp.start('style');
});