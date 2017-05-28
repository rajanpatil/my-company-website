var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('run', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            fallback: 'home.html',
            open: true
        }));
});