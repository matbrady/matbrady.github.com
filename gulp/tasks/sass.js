var config = require('../config');
var gulp   = require('gulp');
var sass   = require('gulp-ruby-sass');

gulp.task('sass', function() { 

  return sass(config.paths.scss) 
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(gulp.dest(config.paths.css));
});