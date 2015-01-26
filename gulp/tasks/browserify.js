var browserify = require('browserify');
var config = require('../config');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

gulp.task('browserify', function() {
  return browserify(config.paths.js + '/main.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('bundle.js'))
    // uglify the script
    .pipe(streamify(uglify()))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./build/'));
});