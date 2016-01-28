var gulp = require('gulp');

gulp.task('temp', ['clean'], function () {
  gulp.start('js', 'styles', 'html', 'lib');
});

