var gulp = require('gulp');

gulp.task('default', ['temp'], function() {
  gulp.start('watch');
});