const gulp = require('gulp'),
    config = require('./config.json');

gulp.task('clean:dist', () => require('del')(config.clean.dist));

gulp.task('webpack', () =>
    gulp.src(config.webpack.src)
        .pipe(require('webpack-stream')(require('../webpack.config.prod'), require('webpack')))
        .pipe(gulp.dest(config.webpack.dest))
);
