var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function () {
  browserSync({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['./dist']
    }
    
  });

  gulp.watch([
    './dist/**'
  ]).on('change', reload);
});