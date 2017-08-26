'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	cmq = require('gulp-combine-mq'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	twig = require('gulp-twig');

gulp.task('js', function() {
	return gulp.src('./assets/js/*.js')
		.pipe(uglify())
		.on('error', handleError)
		.pipe(gulp.dest('./public/assets/js'));
});

gulp.task('vendor-js', function() {
	return gulp.src('./assets/js/vendor/*.js')
		.pipe(uglify())
		.on('error', handleError)
		.pipe(gulp.dest('./public/assets/js/vendor'));
});

gulp.task('sass', function() {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(sass())
		.on('error', handleError)
		.pipe(cmq())
		.pipe(autoprefixer({cascade: false}))
		.pipe(gulp.dest('./public/assets/css'));
});

gulp.task('img', function() {
	return gulp.src('./assets/img/*')
		.pipe(imagemin())
		.on('error', handleError)
		.pipe(gulp.dest('./public/assets/img'));
});

gulp.task('html', function() {
	return gulp.src('./*.html')
		.pipe(twig())
		.on('error', handleError)
		.pipe(gulp.dest('./public'));
});

gulp.task('start', function() {
	gulp.start('js', 'vendor-js', 'sass', 'img', 'html');
});

gulp.task('watch', ['start'], function() {
	gulp.watch('./assets/js/*.js', ['js']);
	gulp.watch('./assets/js/vendor/*.js', ['vendor-js']);
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
	gulp.watch('./assets/img/*', ['img']);
	gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['start']);

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}