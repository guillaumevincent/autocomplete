"use strict";
var gulp = require("gulp");
var babel = require("gulp-babel");
var del = require('del');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var jsonminify = require('gulp-jsonminify');
var minifyHtml = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

var paths = {
    build: "dist/",
    js: [
        'app/**/*.js'
    ],
    js_vendors: [],
    html: [
        'app/**/*.html'
    ],
    styles: [
        'assets/styles/**/*.scss'
    ],
    styles_vendors: [],
    images: [
        'assets/images/**/*'
    ],
    fonts: [],
    locales: [
        'app/locales/*'
    ]
};


gulp.task('clean', function (callback) {
    return del(paths.build, {force: true}, callback);
});

gulp.task('fonts', [], function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(paths.build + 'fonts/'));
});

gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(concat('app.min.js'))
        .pipe(babel())
        //.pipe(uglify())
        .pipe(gulp.dest(paths.build + 'js/'));
});

gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.build + 'images/'));
});

gulp.task('locales', function () {
    return gulp.src(paths.locales)
        .pipe(jsonminify())
        .pipe(gulp.dest(paths.build + 'locales/'));
});

gulp.task('js_vendors', function () {
    return gulp.src(paths.js_vendors)
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest(paths.build + 'js/'));
});

gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(minifyHtml({empty: true}))
        .pipe(gulp.dest(paths.build + 'html/'));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minifyCss({keepSpecialComments: 0}))
        .pipe(gulp.dest(paths.build + '/styles'));
});

gulp.task('styles_vendors', function () {
    return gulp.src(paths.styles_vendors)
        .pipe(concat('vendors.min.css'))
        .pipe(gulp.dest(paths.build + 'styles/'));
});

gulp.task('build', ['clean'], function () {
    gulp.start('js', 'js_vendors', 'html', 'styles', 'styles_vendors', 'fonts', 'images', 'locales');
});

gulp.task('watch', ['build'], function () {
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.js_vendors, ['js_vendors']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.styles_vendors, ['styles_vendors']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.fonts, ['fonts']);
    gulp.watch(paths.locales, ['locales']);
});


gulp.task('default', ['watch'], function () {

});