var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('package', function() {
  runSequence('build', copy);
});

function copy() {
  gulp.src(gulp.paths.tempDir + '/**/*').pipe(gulp.dest(gulp.paths.packageDir));
};
