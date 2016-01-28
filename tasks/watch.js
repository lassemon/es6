var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('watch', ['browserify-watch'], function () {
   watch('./src/**/*.html', batch(function (events, done) {
        gulp.start('html', done);
   }));

   watch('./src/**/*.css', batch(function (events, done) {
        gulp.start('styles', done);
   }));

   watch('./src/**/*.js', batch(function (events, done) {
        gulp.start('js', done);
   }));
});