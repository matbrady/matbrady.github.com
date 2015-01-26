var gulp = require('gulp');
var svgSprite = require("gulp-svg-sprite");
var config = require('../config');

var svgConfig = {
  mode: {
    // css: {
    //   dest: config.paths.icon,
    //   render: {
    //     scss: true
    //   }
    // },
    symbol: {
      dest: 'icon',
      example: true
    }
  }
};


gulp.task('sprites', function () {
  gulp.src(config.paths.svg + '/*.svg')
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest(config.paths.assets));

  // gulp.src('app/assets/svg/*.svg')
  //   .pipe(svg2png())
  //   .pipe(rename({
  //     prefix: "sprite.symbol.svg.",
  //   }))
  //   .pipe(gulp.dest("app/assets/icon/svg"));

  // gulp.src('app/assets/symbol/svg/*.svg')
  //   .pipe(svgmin())
  //   .pipe(gulp.dest("app/assets/symbol/svg-min"));
});
