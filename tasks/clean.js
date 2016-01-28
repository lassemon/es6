var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del([gulp.paths.tempDir, gulp.paths.packageDir]);
});