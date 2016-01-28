var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('temp', function (cb) {
  runSequence(['js', 'styles', 'html', 'lib'], cb);
});

