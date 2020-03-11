const browserSync = require('browser-sync').create();
const del         = require('del');
const gulp        = require('gulp');
const prefixer    = require('gulp-autoprefixer');
const minifyCss   = require('gulp-clean-css');
const concat      = require('gulp-concat');
const eslint      = require('gulp-eslint');
const gulpIf      = require('gulp-if');
const imagemin    = require('gulp-imagemin');
const sass        = require('gulp-sass');
const sassLint    = require('gulp-sass-lint');
const sourcemaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify-es').default;

const config      = require('./src/app/gulpfile.json');
const isEnv       = require('./src/app/is-env');
const lint        = require('./src/app/lint');

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
    return lint(gulp, eslint, [config.sourcePath + 'js/{lib,module,plugin}/*.js', config.sourcePath + 'js/scripts.js'], 'js');
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

// clean up folders
function cleanUp() {
//    del([
//            config.systemPath + 'css/**/*',
//            config.systemPath + 'js/**/*',
//            config.systemPath + 'img/**/*',
//            config.systemPath + 'font/**/*',
//            config.systemPath + 'svg/**/*'
//        ], {force: true});
        
    return del([
            config.publicPath + 'css/**/*',
            config.publicPath + 'js/**/*',
            config.publicPath + 'img/**/*',
            config.publicPath + 'font/**/*',
            config.publicPath + 'svg/**/*'
        ]);
}

// initialize BrowserSync
function browserSyncInit(done) {
    // start browsersync
    browserSync.init({
        port: 3000,
        ui: {
            port: 3001
        },
        // ui: false, // enable in production
        proxy: config.localServer
    });
    done();
}

// reload browser
function browserSyncReload(done) {
    browserSync.reload();
    done();
}

// watch files
function watch() {
    // watch scss files
    gulp.watch(config.sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch js files
    gulp.watch(config.sourcePath + 'js/**', gulp.series(js, jsLint));
    // watch images
    gulp.watch(config.sourcePath + 'img/**', img);
    // watch fonts
    gulp.watch(config.sourcePath + 'font/**', font);
    // watch svg
    gulp.watch(config.sourcePath + 'svg/**', svg);
}

// watch files and reload browser on file change
function watchAndReload() {
    watch();
    
    gulp.watch(config.publicPath + '**/*.{css,eot,ico,js,jpg,otf,png,svg,ttf,woff,woff2}', browserSyncReload);
    gulp.watch('templates/**/*.{php,html,phtml}', browserSyncReload);
}

exports.scss = scss;
exports.scssLint = scssLint;
exports.js = js;
exports.jsLint = jsLint;
exports.img = img;
exports.font = font;
exports.svg = svg;
exports.cleanUp = cleanUp;
exports.watch = watch;
exports.watchAndReload = watchAndReload;
exports.browserSyncInit = browserSyncInit;
exports.browserSyncReload = browserSyncReload;

// build task
gulp.task('build', gulp.series(cleanUp, scss, js, scssLint, jsLint, img, font, svg));

// default task if just called gulp
gulp.task('default', gulp.parallel(watchAndReload, browserSyncInit));