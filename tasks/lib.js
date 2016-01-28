var gulp = require('gulp');

gulp.task('lib', function () {
	return gulp.src('./src/lib/*')
    	.pipe(gulp.dest(gulp.paths.tempDir + '/lib'));
});