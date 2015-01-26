var browserSync = require('browser-sync');
var config      = require('../config');
var gulp        = require('gulp');

gulp.task('browserSync', function() { 
  browserSync.init(null, {
    browser: "google chrome",
    files: ["index.html", "assets/**/*.{css,js}"],
    port: config.env.port,
    notify: false,
    server: {
      baseDir: "./"
    }
  });
});