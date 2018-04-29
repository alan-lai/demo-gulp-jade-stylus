const gulp = require('gulp');
const jade = require('gulp-jade');
const stylus = require('gulp-stylus');

gulp.task('jade', () => {
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', () => {
    gulp.watch('./src/*.jade', ['jade'])
    gulp.watch('./src/styles/*.styl', ['stylus'])
});

gulp.task('stylus', function () {
    gulp.src('./src/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', ['jade', 'stylus', 'watch']);
