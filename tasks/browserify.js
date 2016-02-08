var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var extend = require('util')._extend
var brfs = require('brfs');

var browserify = require('browserify');
var watchify = require('watchify');

gulp.task('browserify', function(){
  developmentBundle();
});


function developmentBundle(){
  var bundler = browserify({
    entries: [gulp.paths.jsApp],
    transform: brfs
  });
  buildBundle(bundler);
}

function buildBundle(bundler){
  bundler
    .bundle()
      .on('error', function(err){
      console.log(err.message);
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest(gulp.paths.tempDir))
}