var gulp = require('gulp');

gulp.task('styles', function() {
    return gulp.src('./src/**/*.css')
    	.pipe(gulp.dest(gulp.paths.tempDir));
});