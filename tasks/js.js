var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('js', function (cb) {
  runSequence('lint', 'browserify', cb);
});