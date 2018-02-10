var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var minifyCss   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var series      = require('stream-series');

var localServer = "http://localhost/project/public";
var sourcePath  = "src/";
var publicPath  = "public/";
var systemPath  = 'path/to/system/'; // e.g. TYPO3, WordPress, ...

// processing scss to css and minify result
gulp.task('scss', function() {
    gulp.src(sourcePath + 'scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(systemPath + 'css/'))
        .pipe(gulp.dest(publicPath + 'css/'));
});

// concatinate and uglify all js
gulp.task('js', function() {
    return series(gulp.src(sourcePath + 'js/lib/**/*.js'),
                  gulp.src(sourcePath + 'js/plugin/**/*.js'),
                  gulp.src(sourcePath + 'js/module/**/*.js'),
                  gulp.src(sourcePath + 'js/scripts.js'))
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(systemPath + 'js/'))
        .pipe(gulp.dest(publicPath + 'js/'));
});

// minify images
gulp.task('img', function() {
    gulp.src(sourcePath + '{img,icon}/**/*.{png,gif,jpg,jpeg,ico,xml}')
        .pipe(imagemin())
//        .pipe(gulp.dest(systemPath))
        .pipe(gulp.dest(publicPath));
});

// copy all fonts
gulp.task('font', function() {
    gulp.src(sourcePath + 'font/**')
//        .pipe(gulp.dest(systemPath + 'font/'))
        .pipe(gulp.dest(publicPath + 'font/'));
});

// copy all svg images
gulp.task('svg', function() {
    gulp.src(sourcePath + 'svg/**')
//        .pipe(gulp.dest(systemPath + 'svg/'))
        .pipe(gulp.dest(publicPath + 'svg/'));
});

// add the watcher
gulp.task('watch', function() {
    // watch less files
    gulp.watch(sourcePath + 'scss/**', ['scss']);
    // watch js files
    gulp.watch(sourcePath + 'js/**', ['js']);
    // watch images
    gulp.watch(sourcePath + '{img,icon}/**', ['img']);
    // watch fonts
    gulp.watch(sourcePath + 'font/**', ['font']);
    // watch svg
    gulp.watch(sourcePath + 'svg/**', ['svg']);
});

// production
gulp.task('prod', ['scss', 'js', 'img', 'font', 'svg']);

// default task if just called gulp (incl. Watch)
gulp.task('default', ['scss', 'js', 'img', 'font', 'svg', 'watch'], function() {
    // start browsersync
    browserSync.init({
        proxy: localServer
    });

    gulp.watch(publicPath + '**/*.{css,js,jpg,png,svg,ico}').on('change', browserSync.reload);
    gulp.watch('templates/**/*.{php,html,phtml}').on('change', browserSync.reload);
//    gulp.watch(systemPath + '**/*.{php,html,phtml}').on('change', browserSync.reload);
});