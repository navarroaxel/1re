const gulp = require('gulp'),
    config = require('./config.json');

gulp.task('scsslint', () => {
    const scsslint = require('gulp-scss-lint');

    return gulp.src('src/sass/**/*.scss')
        .pipe(scsslint({config: '.scss-lint.yml'}))
        .pipe(scsslint.failReporter());
});

gulp.task('eslint', () => {
    const eslint = require('gulp-eslint');

    return gulp.src(config.eslint.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
