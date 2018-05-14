var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var minifyCss   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var del         = require('del');

var localServer = "http://localhost/imhh-gulp/public";
var sourcePath  = "src/";
var publicPath  = "public/";
var systemPath  = 'path/to/system/'; // e.g. TYPO3, WordPress, Drupal, Slim FW ...

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
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js',
//            'node_modules/@fortawesome/fontawesome-free-brands/index.js',
//            'node_modules/@fortawesome/fontawesome-svg-core/index.js',
//            'node_modules/@fortawesome/fontawesome/index.js',
            sourcePath + 'js/lib/**/*.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/cssuseragent/cssua.js',
            'node_modules/vanilla-lazyload/dist/lazyload.js',
            sourcePath + 'js/plugin/**/*.js',
            sourcePath + 'js/module/**/*.js',
            sourcePath + 'js/scripts.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(systemPath + 'js/'))
        .pipe(gulp.dest(publicPath + 'js/'));
});

// minify images
gulp.task('img', function() {
    gulp.src(sourcePath + '{img,icon}/**/*.{png,gif,jpg,jpeg,ico,xml,json}')
        .pipe(imagemin())
//        .pipe(gulp.dest(systemPath))
        .pipe(gulp.dest(publicPath));
});

// copy all fonts
gulp.task('font', function() {
    gulp.src([
            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
//            'node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/**',
            'node_modules/slick-carousel/slick/fonts/**',
            sourcePath + 'font/**'
        ])
//        .pipe(gulp.dest(systemPath + 'font/'))
        .pipe(gulp.dest(publicPath + 'font/'));
});

// copy all svg images
gulp.task('svg', function() {
    gulp.src([
            'node_modules/@fortawesome/fontawesome-free/svgs/**',
            'node_modules/@fortawesome/fontawesome-free/sprites/**',
            sourcePath + 'svg/**'
        ])
//        .pipe(gulp.dest(systemPath + 'svg/'))
        .pipe(gulp.dest(publicPath + 'svg/'));
});

// clean up folders
gulp.task('cleanup', function() {
//    del([
//            systemPath + 'css/**/*',
//            systemPath + 'js/**/*',
//            systemPath + 'img/**/*',
//            systemPath + 'font/**/*',
//            systemPath + 'svg/**/*'
//        ], {force: true});
        
    del([
            publicPath + 'css/**/*',
            publicPath + 'js/**/*',
            publicPath + 'img/**/*',
            publicPath + 'font/**/*',
            publicPath + 'svg/**/*'
        ]);
});

// add the watcher
gulp.task('watch', function() {
    // watch scss files
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