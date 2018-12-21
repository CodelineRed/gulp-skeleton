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

// concatinate and uglify all js
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

// minify images
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

// copy all fonts
function font() {
    return gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
            'node_modules/slick-carousel/slick/fonts/**',
            sourcePath + 'font/**'
        ])
//        .pipe(gulp.dest(systemPath + 'font/'))
        .pipe(gulp.dest(publicPath + 'font/'));
}

// copy all svg images
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
function cleanup() {
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

function serve() {
    // start browsersync
    return browserSync.init({
        proxy: localServer
    });
}

function reload(done) {
    browserSync.reload();
}

// add the watcher
function watch() {
    // watch scss files
    gulp.watch(sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch js files
    gulp.watch(sourcePath + 'js/**', gulp.series(js, jsLint));
    // watch images
    gulp.watch(sourcePath + 'img/**', gulp.series(img));
    // watch fonts
    gulp.watch(sourcePath + 'font/**', gulp.series(font));
    // watch svg
    gulp.watch(sourcePath + 'svg/**', gulp.series(svg));
}

function watchReload() {
    // watch scss files
    gulp.watch(sourcePath + 'scss/**', gulp.series(scss, scssLint), reload);
    // watch js files
    gulp.watch(sourcePath + 'js/**', gulp.series(js, jsLint), reload);
    // watch images
    gulp.watch(sourcePath + 'img/**', gulp.series(img), reload);
    // watch fonts
    gulp.watch(sourcePath + 'font/**', gulp.series(font), reload);
    // watch svg
    gulp.watch(sourcePath + 'svg/**', gulp.series(svg), reload);
}

function browserSyncReload() {
    watch();
    
    // start browsersync
    browserSync.init({
        proxy: localServer
    });

    gulp.watch(publicPath + '**/*.{css,js,jpg,png,svg,ico}').on('change', browserSync.reload);
    gulp.watch('templates/**/*.{php,html,phtml}').on('change', browserSync.reload);
//    gulp.watch(systemPath + '**/*.{php,html,phtml}').on('change', browserSync.reload);
}

exports.scss = scss;
exports.scssLint = scssLint;
exports.js = js;
exports.jsLint = jsLint;
exports.img = img;
exports.font = font;
exports.svg = svg;
exports.cleanup = cleanup;
exports.watch = watch;
exports.watchReload = watchReload;
exports.browserSyncReload = browserSyncReload;

gulp.task('scss', scss);
gulp.task('scss-lint', scssLint);
gulp.task('js', js);
gulp.task('js-lint', jsLint);
gulp.task('img', img);
gulp.task('font', font);
gulp.task('svg', svg);
gulp.task('cleanup', cleanup);
gulp.task('watch', watch);

// production
gulp.task('prod', gulp.series(cleanup, gulp.parallel(scss, js), gulp.parallel(scssLint, jsLint), img, font, svg));

// default task if just called gulp (incl. Watch)
gulp.task('default', gulp.series(cleanup, scss, scssLint, js, jsLint, img, font, svg, browserSyncReload));