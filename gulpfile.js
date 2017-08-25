'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	imagemin = require('gulp-imagemin');

gulp.task('default', function () {
	gulp.src('./assets/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./public/assets/js'));

	gulp.src('./styles/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public/assets/css'));

	gulp.src('./assets/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./public/assets/img'));

	gulp.src('./*.html')
	.pipe(gulp.dest('./public'));
});