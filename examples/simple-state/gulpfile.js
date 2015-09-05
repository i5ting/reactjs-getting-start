var gulp = require('gulp');
var react = require('gulp-react');
 
gulp.task('jsx', function () {
    return gulp.src('src/**')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jsx'], function() {
  gulp.watch('./src/**/*', ['jsx']);
});