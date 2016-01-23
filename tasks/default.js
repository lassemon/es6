var gulp = require('gulp');

gulp.task('default', ['lint', 'watch'], function() {
  gulp.start('babel');
});