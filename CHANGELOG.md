# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.4] - 2018-09-06
### Added
- Dynamic [`baseUrl`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/templates/layouts/base.phtml#L15)

### Changed
- [`.htaccess`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/public/.htaccess)

## [3.0.4] - 2018-09-05
### Added
- [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- Image compress settings in [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js)
- [SVG extension](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L80) to img gulp task

### Changed
- Disabled page reload on cookieconsent button click

### Removed
- css property prefixes from scss files
- icon folder regex from img gulp task

## [3.0.2] - 2018-08-17
### Added
- Version number to JavaScript and CSS file in [`base.phtml`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/templates/layouts/base.phtml)

### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)
- [`.htaccess`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/public/.htaccess)


## [3.0.1] - 2018-07-29
### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)
- Disabled FA 5 [webfont import](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L99)
- From Fontawesome 5.1 to Fontawesome 5.2
- From Bootstrap 4.1.1 to Bootstrap 4.1.3
- From Cookieconsent 3.0.6 to Cookieconsent 3.1
- From LazyLoad 8.7 to LazyLoad 8.11
- Fontawesome [font weights](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/scss/lib/fontawesome.scss#L3-L5)
- Disabled [Fontawesome CSS](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/scss/styles.scss#L4) replaced by [Fontawesome JavaScript](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L50)

## [3.0.0] - 2018-07-23
### Added
- [Fontawesome 5.1](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/package.json#L49) as default version

### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)
- [`baseUrl`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/templates/layouts/base.phtml#L15)

### Removed
- Fontawesome 5.0