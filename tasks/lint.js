var gulp = require('gulp');
var eslint = require('gulp-eslint');
 
gulp.task('lint', function (cb) {
  gulp.src('./src/**/*.js')
      .pipe(eslint({
      	'env': {
      		'es6': true
      	}
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());

  cb();
});