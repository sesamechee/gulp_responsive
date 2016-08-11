'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
	images: './lib/images/**/*',
	css: './lib/css/**/*',
	scripts:{
		dependencies: './lib/js/dependencies/**/*',
		independencies: './lib/js/independencies/**/*'
	},
	icons: './lib/icons/*.svg'
};

gulp.task('clean', function () {
	return del(['temp']);
});

gulp.task('scripts', function () {
	gulp.src(paths.scripts.dependencies)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'))
		.pipe(concat('script.js'))
		.pipe(gulp.dest('js/'));
	gulp.src(paths.scripts.independencies)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'))
		.pipe(gulp.dest('js/'));
});

gulp.task('scripts:minify', function () {
	return gulp.src(['js/**/*'])
		.pipe(uglify())
		.pipe(gulp.dest('js/'));
});

gulp.task('images', ['clean'], function () {
	return gulp.src(paths.images)
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('images'));
});

gulp.task('Iconfont', function(){
	gulp.src(paths.icons)
	.pipe(iconfontCss({
		fontName: 'Icons',
		path: './lib/icons/_icons.css',
		targetPath: '../css/icons.css',
		fontPath: '../fonts/'
	}))
	.pipe(iconfont({
		fontName: 'Icons',
		formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'] // default, 'woff2' and 'svg' are available
	}))
	.pipe(gulp.dest('fonts/'));
});


gulp.task('css', function () {
    var processors = [
        autoprefixer({
			browsers: ['> 1%', 'IE 9']
		})
    ];
    return gulp.src(paths.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('css'));
});

gulp.task('css:minify', function () {
    return gulp.src(['css/**/*'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('css'));
});

gulp.task('bower', function() {
    gulp.src(mainBowerFiles('**/*.css'))
		.pipe (concat ("vender.css"))
        .pipe(gulp.dest('css/'));
	gulp.src(mainBowerFiles('**/*.js'))
		.pipe (concat ("vender.js"))
		.pipe(uglify())
        .pipe(gulp.dest('js/'));
});

gulp.task('watch', function () {
	gulp.watch([paths.scripts.dependencies , paths.scripts.independencies], ['scripts']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.css, ['css']);
});

gulp.task('default', ['clean', 'watch', 'bower', 'scripts', 'Iconfont', 'css', 'images']);
gulp.task('minify', ['scripts:minify', 'css:minify']);
