var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var extend = require('util')._extend

var sourcePath = './src/app.js';

function build(){
  var bundler = browserify(sourcePath);
  buildBundle(bundler);
}

function buildBundle(bundler){
  bundler.bundle()
    .on('error', function(err){
      console.log(err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'))
}

gulp.task('browserify', function(){
  build();
});

function watchifyBundle(){
  var bundler = browserify(sourcePath);
  watchifyBundle(bundler);
}

function initBundleWithWatch(){
  var watchifyBrowserifyOpts = {
    debug: true
  }

  watchifyBrowserifyOpts = extend(watchifyBrowserifyOpts, watchify.args);

  var bundler = watchify(browserify(sourcePath, watchifyBrowserifyOpts));

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
    .pipe(gulp.dest('./dist'))
}

gulp.task('browserify-watch', function(){
	initBundleWithWatch();
});

