var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webserver = require('gulp-webserver');

gulp.task('lint', function () {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format('stylish'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      host: '0.0.0.0',
      fallback: 'index.html'
    }));
});

gulp.task('watch-lint', function() {
  gulp.watch('src/**/*.js', ['lint']);
});


gulp.task('default', ['lint'], function (z) {
  // This will only run if the lint task is successful...
});

gulp.task('dev', ['webserver', 'lint', 'watch-lint'], function(){});
