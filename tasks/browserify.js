var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var extend = require('util')._extend

gulp.task('browserify', function(){
  developmentBundle();
});

function developmentBundle(){
  var bundler = browserify(gulp.paths.jsApp);
  buildBundle(bundler);
}

function buildBundle(bundler){
  bundler.bundle()
    .on('error', function(err){
      console.log(err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(gulp.paths.tempDir))
}

gulp.task('browserify-watch', function(cb){
  initBundleWithWatch();
  cb();
});

function initBundleWithWatch(){
  var watchifyBrowserifyOpts = {
    debug: true
  }

  watchifyBrowserifyOpts = extend(watchifyBrowserifyOpts, watchify.args);

  var bundler = watchify(browserify(gulp.paths.jsApp, watchifyBrowserifyOpts));

  bundler.on('update', function(){
    watchifyBundle(bundler);
  });
  
  watchifyBundle(bundler);
}

function watchifyBundle(bundler) {
  bundler.bundle()
    .on('error', function(err){
      console.log(err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(gulp.paths.tempDir))
}

