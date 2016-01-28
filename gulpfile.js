var gulp = require('gulp');

gulp.paths = {
  tempDir : './.tmp',
  packageDir : './dist',
  jsApp : './src/app.js'
};

var requireDir = require('require-dir');
var dir = requireDir('./tasks');