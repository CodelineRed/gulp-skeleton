import jsLint from './js-lint.js';
import scssLint from './scss-lint.js';

/**
 * Lint given files
 *
 * @param gulp mixed
 * @param module mixed
 * @param paths array
 * @param file string
 * @return gulp signal
 */
function lint(gulp, module, paths, file) {
    let lintConfig = {};

    if (file === 'js') {
        lintConfig = jsLint;
    } else if (file === 'scss') {
        lintConfig = scssLint;
    }

    return gulp.src(paths)
        .pipe(module(lintConfig))
        .pipe(module.format())
        .pipe(module.failOnError());
}

export default lint;
