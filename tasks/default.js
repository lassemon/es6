var gulp = require('gulp');

gulp.task('default', ['lint', 'browserify', 'lib', 'html', 'styles'], function() {
  gulp.start('watch');
});