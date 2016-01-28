var gulp = require('gulp');

gulp.task('package', function() {
  gulp.src([gulp.paths.tempDir + '/**/*']).pipe(gulp.dest(gulp.paths.packageDir));
});
