var config = require('../config');
var gulp   = require('gulp');

gulp.task('watch', function() {
  gulp.watch(config.paths.scss + '/*.scss', ['sass']);
  gulp.watch(config.paths.js + '/*.js', ['browserify']);
});

