var gulp = require('gulp');

gulp.task('js', ['lint'], function () {
  gulp.start('browserify');
});