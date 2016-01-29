var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
  runSequence(['js', 'styles', 'html', 'lib'], cb);
});

