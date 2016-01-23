var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('watch', function () {
   watch('./src/**/*.js', batch(function (events, done) {
        gulp.start('babel', done);
    }));
});