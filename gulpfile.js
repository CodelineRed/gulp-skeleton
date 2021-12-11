const browserSync = require('browser-sync').create();
const del         = require('del');
const gulp        = require('gulp');
const prefixer    = require('gulp-autoprefixer');
const minifyCss   = require('gulp-clean-css');
const concat      = require('gulp-concat');
const eslint      = require('gulp-eslint');
const favicons    = require('gulp-favicons');
const gulpIf      = require('gulp-if');
const imagemin    = require('gulp-imagemin');
const sass        = require('gulp-sass')(require('sass'));
const sassLint    = require('gulp-sass-lint');
const sourcemaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify-es').default;

const config      = require('./src/app/gulpfile.json');
const isEnv       = require('./src/app/is-env');
const lint        = require('./src/app/lint');

// initialize BrowserSync
function browserSyncInit(done) {
    browserSync.init(config[config.browserSyncConfig]);
    done();
}

// reload browser
function browserSyncReload(done) {
    browserSync.reload();
    done();
}

// clean up folders
function cleanUp() {
//    del([
//            config.systemPath + 'css/styles.*',
//            config.systemPath + 'font/**/*',
//            config.systemPath + 'img/**/*',
//            config.systemPath + 'js/scripts.*',
//            config.systemPath + 'svg/**/*'
//        ], {force: true});

    return del([
            config.publicPath + 'css/styles.*',
            config.publicPath + 'font/**/*',
            config.publicPath + 'img/**/*',
            config.publicPath + 'js/scripts.*',
            config.publicPath + 'svg/**/*'
        ]);
}

// generate favicons
function favicon() {
    return gulp.src('./src/img/favicon.png')
        .pipe(favicons({
            appName: 'Gulp Skeleton',
            appShortName: 'Gulp Skeleton',
            appDescription: 'Skeleton to create templates with Gulp',
            developerName: 'InsanityMeetsHH',
            developerURL: 'https://insanitymeetshh.net/',
            background: '#212121',
            path: '',
            url: 'https://gulp.insanitymeetshh.net/',
            display: 'standalone',
            orientation: 'portrait',
            scope: '/',
            start_url: '/',
            version: 1.0,
            logging: false,
            html: 'index.html',
            pipeHTML: true,
            replace: true
        }))
//        .pipe(gulp.dest(config.systemPath + 'img/favicons/'))
        .pipe(gulp.dest(config.publicPath + 'img/favicons/'));
}

// copy font files
function font() {
    return gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
            'node_modules/slick-carousel/slick/fonts/**',
            config.sourcePath + 'font/**'
        ])
//        .pipe(gulp.dest(config.systemPath + 'font/'))
        .pipe(gulp.dest(config.publicPath + 'font/'));
}

// compress images
function img() {
    return gulp.src(config.sourcePath + 'img/**/*.{png,gif,jpg,jpeg,ico,xml,json,svg}')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
//        .pipe(gulp.dest(config.systemPath + 'img/'))
        .pipe(gulp.dest(config.publicPath + 'img/'));
}

// concatinate and uglify js files
function js() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js',
            config.sourcePath + 'js/lib/**/*.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/cssuseragent/cssua.js',
            'node_modules/vanilla-lazyload/dist/lazyload.js',
            'node_modules/cookieconsent/src/cookieconsent.js',
            config.sourcePath + 'js/plugin/**/*.js',
            config.sourcePath + 'js/module/**/*.js',
            config.sourcePath + 'js/scripts.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(gulpIf(isEnv(['test', 'prod'], config.env), uglify()))
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(config.systemPath + 'js/'))
        .pipe(gulp.dest(config.publicPath + 'js/'));
}

// lint js files
function jsLint() {
    return lint(gulp, eslint, [config.sourcePath + 'js/**/*.js'], 'js');
}

// processing scss to css and minify result
function scss() {
    return gulp.src(config.sourcePath + 'scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpIf(isEnv(['test', 'prod'], config.env), minifyCss({compatibility: 'ie8'})))
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(config.systemPath + 'css/'))
        .pipe(gulp.dest(config.publicPath + 'css/'));
}

// lint scss files
function scssLint() {
    return lint(gulp, sassLint, [config.sourcePath + 'scss/**/*.scss'], 'scss');
}

// compress and copy svg files
function svg() {
    return gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/svgs/**',
//            'node_modules/@fortawesome/fontawesome-free/sprites/**',
            config.sourcePath + 'svg/**/*.svg'
        ])
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
//        .pipe(gulp.dest(config.systemPath + 'svg/'))
        .pipe(gulp.dest(config.publicPath + 'svg/'));
}

// watch files
function watch() {
    // watch fonts
    gulp.watch(config.sourcePath + 'font/**', font);
    // watch images
    gulp.watch(config.sourcePath + 'img/**', img);
    // watch favicon
    gulp.watch(config.sourcePath + 'img/favicon.png', favicon);
    // watch js files
    gulp.watch(config.sourcePath + 'js/**', gulp.series(js, jsLint));
    // watch scss files
    gulp.watch(config.sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch svg
    gulp.watch(config.sourcePath + 'svg/**', svg);
}

// watch files and reload browser on file change
function watchAndReload() {
    watch();

    gulp.watch(config.publicPath + '**/*.{css,eot,ico,js,jpg,otf,png,svg,ttf,woff,woff2}', browserSyncReload);
    gulp.watch('templates/**/*.{php,html,phtml}', browserSyncReload);
}

exports.browserSyncInit = browserSyncInit;
exports.browserSyncReload = browserSyncReload;
exports.cleanUp = cleanUp;
exports.favicon = favicon;
exports.font = font;
exports.img = img;
exports.js = js;
exports.jsLint = jsLint;
exports.scss = scss;
exports.scssLint = scssLint;
exports.svg = svg;
exports.watch = watch;
exports.watchAndReload = watchAndReload;

// lintAll task
gulp.task('lintAll', gulp.series(jsLint, scssLint));

// build task
gulp.task('build', gulp.series(cleanUp, favicon, font, img, js, jsLint, scss, scssLint, svg));

// default task if just called gulp
gulp.task('default', gulp.parallel(watchAndReload, browserSyncInit));