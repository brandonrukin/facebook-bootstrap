//require gulp
var gulp = require('gulp');

//require gulp plugins
var sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
}); //browserSync task

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
}); //sass task

gulp.task('watch', ['sass', 'browserSync'], function() {
  gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
}); //watch task


