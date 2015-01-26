var gulp        = require('gulp');
var taskListing = require('gulp-task-listing');

gulp.task('default', ['sass', 'browserify', 'watch', 'browserSync']);

gulp.task('help', taskListing);