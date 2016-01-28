var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  del([gulp.paths.tempDir, gulp.paths.packageDir]);
});