var gulp = require('gulp');

gulp.task('styles', function(cb) {
  gulp.src('./src/**/*.css')
  	.pipe(gulp.dest(gulp.paths.tempDir));
    
  cb();
});