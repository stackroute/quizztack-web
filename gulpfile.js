const gulp = require('gulp');

const eslint = require('gulp-eslint');
const htmlhint = require('gulp-htmlhint');
const mocha = require('gulp-mocha');

gulp.task('lint', ['eslint', 'htmlhint']);

gulp.task('eslint', function() {
  return gulp.src([
    'gulpfile.js',
    'webpack.config.js',
    '!node_modules/**/*',
    'client/**/*.js',
    'client/**/*.jsx'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('htmlhint', function() {
  return gulp.src(['**/*.html', '!node_modules/**/*'])
  .pipe(htmlhint({htmlhintrc: '.htmlhintrc'}))
  .pipe(htmlhint.failReporter());
});

gulp.task('test', function() {
  return gulp.src(['**/*.spec.js', '!node_modules/**/*'], { read: false })
  .pipe(mocha());
});
