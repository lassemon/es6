var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var runSequence = require('run-sequence');

gulp.task('watch', function () {
   watch('./src/**/*.html', batch(function (events, done) {
    runSequence('browserify-watch', 'html', done);
   }));

   watch('./src/**/*.css', batch(function (events, done) {
      runSequence('browserify-watch', 'styles', done);
   }));

   watch('./src/**/*.js', batch(function (events, done) {
      runSequence('browserify-watch', 'js', done);
   }));
});