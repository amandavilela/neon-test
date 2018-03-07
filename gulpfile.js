var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
let uglify = require('gulp-uglifyes');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

gulp.task('sass', () => {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', () => {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'js'], () => {
  browserSync.init({server: "./"});
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(["index.html", "dist/css/*.css", "dist/js/*.js"]).on('change', browserSync.reload);
});
