var gulp = require('gulp');

gulp.task('lib', function (cb) {
	gulp.src('./src/lib/*')
  	.pipe(gulp.dest(gulp.paths.tempDir + '/lib'));

  cb();
});