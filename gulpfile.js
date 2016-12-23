require('require-dir')('./gulp');
let gulp = require('gulp');

gulp.task('test', ['scsslint', 'eslint']);

gulp.task('dist', [
    'webpack'
]);

gulp.task('build', ['clean:dist'], () =>
    gulp.run('dist')
);

