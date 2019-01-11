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

var localServer = 'http://localhost/imhh-gulp/public/';
var sourcePath  = 'src/';
var publicPath  = 'public/';
var systemPath  = 'path/to/system/'; // e.g. TYPO3, WordPress, Drupal, Slim FW ...

// processing scss to css and minify result
function scss() {
    return gulp.src(sourcePath + 'scss/styles.scss')
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
}

// lint scss files
function scssLint() {
    return gulp.src([
            sourcePath + 'scss/**/*.scss',
            '!' + sourcePath + 'scss/plugin/slick.scss' // exclude because of trailing ".scss" in path
        ])
        .pipe(sassLint(require('./scss-lint.json')))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}

// concatinate and uglify js files
function js() {
    return gulp.src([
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
}

// lint js files
function jsLint() {
    return gulp.src([
            sourcePath + 'js/**/*.js'
        ])
        .pipe(eslint(require('./js-lint.json')))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

// compress images
function img() {
    return gulp.src(sourcePath + 'img/**/*.{png,gif,jpg,jpeg,ico,xml,json,svg}')
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
//        .pipe(gulp.dest(systemPath + 'img/'))
        .pipe(gulp.dest(publicPath + 'img/'));
}

// copy font files
function font() {
    return gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
            'node_modules/slick-carousel/slick/fonts/**',
            sourcePath + 'font/**'
        ])
//        .pipe(gulp.dest(systemPath + 'font/'))
        .pipe(gulp.dest(publicPath + 'font/'));
}

// compress and copy svg files
function svg() {
    return gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/svgs/**',
//            'node_modules/@fortawesome/fontawesome-free/sprites/**',
            sourcePath + 'svg/**/*.svg'
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
}

// clean up folders
function cleanUp() {
//    del([
//            systemPath + 'css/**/*',
//            systemPath + 'js/**/*',
//            systemPath + 'img/**/*',
//            systemPath + 'font/**/*',
//            systemPath + 'svg/**/*'
//        ], {force: true});
        
    return del([
            publicPath + 'css/**/*',
            publicPath + 'js/**/*',
            publicPath + 'img/**/*',
            publicPath + 'font/**/*',
            publicPath + 'svg/**/*'
        ]);
}

// initialize BrowserSync
function browserSyncInit(done) {
    // start browsersync
    browserSync.init({
        proxy: localServer
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
    gulp.watch(sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch js files
    gulp.watch(sourcePath + 'js/**', gulp.series(js, jsLint));
    // watch images
    gulp.watch(sourcePath + 'img/**', img);
    // watch fonts
    gulp.watch(sourcePath + 'font/**', font);
    // watch svg
    gulp.watch(sourcePath + 'svg/**', svg);
}

// watch files and reload browser on file change
function watchFiles() {
    // watch scss files
    gulp.watch(sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch js files
    gulp.watch(sourcePath + 'js/**', gulp.series(js, jsLint));
    // watch images
    gulp.watch(sourcePath + 'img/**', img);
    // watch fonts
    gulp.watch(sourcePath + 'font/**', font);
    // watch svg
    gulp.watch(sourcePath + 'svg/**', svg);
    
    gulp.watch(publicPath + '**/*.{css,js,jpg,png,svg,ico}', browserSyncReload);
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
exports.watchFiles = watchFiles;
exports.browserSyncInit = browserSyncInit;
exports.browserSyncReload = browserSyncReload;

// build task
gulp.task('build', gulp.series(cleanUp, scss, js, scssLint, jsLint, img, font, svg));

// default task if just called gulp
gulp.task('default', gulp.parallel(watchFiles, browserSyncInit));