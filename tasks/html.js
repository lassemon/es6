var gulp = require('gulp');

gulp.task('html', function (cb) {
	gulp.src('./src/*.html')
  	.pipe(gulp.dest(gulp.paths.tempDir));
    
  cb();
});