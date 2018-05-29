var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('clean', function() {
    return gulp.src('./lib', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('compile', ['clean'], function() {
  return gulp.src('./default/**/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/default'));
});

gulp.task('default', ['clean', 'compile']);