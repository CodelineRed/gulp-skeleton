var browserSync = require('browser-sync').create();
var del         = require('del');
var gulp        = require('gulp');
var prefixer    = require('gulp-autoprefixer');
var minifyCss   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var eslint      = require('gulp-eslint');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var sassLint    = require('gulp-sass-lint');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');

var localServer = 'http://localhost/imhh-gulp/public';
var sourcePath  = 'src/';
var publicPath  = 'public/';
var systemPath  = 'path/to/system/'; // e.g. TYPO3, WordPress, Drupal, Slim FW ...

// processing scss to css and minify result
gulp.task('scss', function() {
    gulp.src(sourcePath + 'scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(systemPath + 'css/'))
        .pipe(gulp.dest(publicPath + 'css/'));
});

// lint scss files
gulp.task('scss-lint', function () {
    gulp.src([
            sourcePath + 'scss/**/*.scss',
            '!' + sourcePath + 'scss/plugin/slick.scss' // exclude because of trailing ".scss" in path
        ])
        .pipe(sassLint(require('./scss-lint.json')))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

// concatinate and uglify all js
gulp.task('js', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js',
            sourcePath + 'js/lib/**/*.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/cssuseragent/cssua.js',
            'node_modules/vanilla-lazyload/dist/lazyload.js',
            'node_modules/cookieconsent/src/cookieconsent.js',
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

// lint js files
gulp.task('js-lint', function () {
    gulp.src([
            sourcePath + 'js/**/*.js'
        ])
        .pipe(eslint(require('./js-lint.json')))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// minify images
gulp.task('img', function() {
    gulp.src(sourcePath + 'img/**/*.{png,gif,jpg,jpeg,ico,xml,json,svg}')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
//        .pipe(gulp.dest(systemPath))
        .pipe(gulp.dest(publicPath + 'img/'));
});

// copy all fonts
gulp.task('font', function() {
    gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
            'node_modules/slick-carousel/slick/fonts/**',
            sourcePath + 'font/**'
        ])
//        .pipe(gulp.dest(systemPath + 'font/'))
        .pipe(gulp.dest(publicPath + 'font/'));
});

// copy all svg images
gulp.task('svg', function() {
    gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/svgs/**',
//            'node_modules/@fortawesome/fontawesome-free/sprites/**',
            sourcePath + 'svg/**/*.{svg}'
        ])
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
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
    gulp.watch(sourcePath + 'scss/**', ['scss', 'scss-lint']);
    // watch js files
    gulp.watch(sourcePath + 'js/**', ['js', 'js-lint']);
    // watch images
    gulp.watch(sourcePath + 'img/**', ['img']);
    // watch fonts
    gulp.watch(sourcePath + 'font/**', ['font']);
    // watch svg
    gulp.watch(sourcePath + 'svg/**', ['svg']);
});

// production
gulp.task('prod', ['scss', 'scss-lint', 'js', 'js-lint', 'img', 'font', 'svg']);

// default task if just called gulp (incl. Watch)
gulp.task('default', ['scss', 'scss-lint', 'js', 'js-lint', 'img', 'font', 'svg', 'watch'], function() {
    // start browsersync
    browserSync.init({
        proxy: localServer
    });

    gulp.watch(publicPath + '**/*.{css,js,jpg,png,svg,ico}').on('change', browserSync.reload);
    gulp.watch('templates/**/*.{php,html,phtml}').on('change', browserSync.reload);
//    gulp.watch(systemPath + '**/*.{php,html,phtml}').on('change', browserSync.reload);
});