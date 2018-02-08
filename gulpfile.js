var sass = require('gulp-sass');
var minify = require('gulp-minify');
var gulp = require('gulp');

gulp.task('default',function () {
    gulp.src('scss/*.scss').pipe(sass()).pipe(minify()).pipe(gulp.dest('css/'));
    gulp.src('js/*.js').pipe(minify()).pipe(gulp.dest('jst/'));
});