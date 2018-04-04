'use strict';

/*
	load modules
*/

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

/*
	build main.bundle.js
*/

gulp.task('browserify', function() {
  return browserify('./dev/scripts/main.js')
    .bundle()
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest('./build/scripts/'))
    .pipe(livereload());
});

/*
	build main.css
*/

gulp.task('styles', function() {
  gulp.src('dev/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
    .pipe(gulp.dest('build/styles/'))
    .pipe(livereload());
});

/*
	watch .js and .scss files
*/

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./dev/scripts/**/*.js', ['browserify']);
  gulp.watch('./dev/styles/*.scss', ['styles']);
});

/*
	gulp default task
*/

gulp.task('default', ['browserify','styles','watch']);
