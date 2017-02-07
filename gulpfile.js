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
var browserSync = require('browser-sync').create();

var paths = {
	browserSyncOption: {
		proxy: 'http://template.gulp_responsive/',
		open: "external"
	},
	images: './lib/images/**/*',
	css: './lib/css/**/*',
	scripts: './lib/js/**/*',
	icons: './lib/icons/*.svg',
	html: ['./html/**/*', './include/**/*']
};

gulp.task('clean', function () {
	return del(['js', 'css']);
});

gulp.task('scripts', function () {
	gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		//.pipe(concat('script.js'))
		.pipe(gulp.dest('js/'))
		.pipe(browserSync.stream());
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
		.pipe(gulp.dest('images'))
		.pipe(browserSync.stream());
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
		appendCodepoints: true,
		appendUnicode: false,
		normalize: true,
		fontHeight: 1000,
		centerHorizontally: true,
		formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'] // default, 'woff2' and 'svg' are available
	}))
	.pipe(gulp.dest('fonts/'))
	.pipe(browserSync.stream());
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
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
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

gulp.task('html', function () {
	return gulp.src(paths.html)
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.icons, ['Iconfont']);
	gulp.watch(paths.html, ['html']);
	browserSync.init( paths.browserSyncOption );
});

gulp.task('default', ['clean', 'bower', 'scripts', 'Iconfont', 'css', 'images', 'watch']);
gulp.task('minify', ['scripts:minify', 'css:minify']);
