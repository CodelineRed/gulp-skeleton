# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.0.0]
### Added
- Gulp 4 task syntax
- [toasts](https://getbootstrap.com/docs/4.2/components/toasts/) and [spinners](https://getbootstrap.com/docs/4.2/components/spinners/) component to bootstrap.scss
- mobileFirst to brand slider config

### Changed
- Bootstrap dependency to 4.2.1
- gulpfile.js inline comments
- README.md

### Removed
- `$ gulp prod` replaced by `$ gulp build`

## [3.1.3] - 2019-01-11
### Fixed
- bug with `$baseUrl` scheme

## [3.1.2] - 2018-10-29
### Added
- Logic to remove hidden cookie consent layer (to remove bottom margin)
- HTML5 tag "main"
- Author url

### Changed
- Cookie consent background and button color.
- Brand slider config

## [3.1.1] - 2018-10-22
### Addded
- W3C validator update
- `lang` attribute to html tag
- `src` attribute to img tag

## [3.1.0] - 2018-10-06
### Added
- [`CHANGELOG.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/CHANGELOG.md)
- [`docker-compose.yml`](https://github.com/InsanityMeetsHH/gulp-templating/blob/develop/docker-compose.yml)
- Slick Carousel [`ajax-loader.gif`](https://github.com/InsanityMeetsHH/gulp-templating/blob/develop/src/img/slick/ajax-loader.gif)
- [Docker installation documentation](https://github.com/InsanityMeetsHH/gulp-templating#installation-with-docker)

### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)
- [`$baseUrl`](https://github.com/InsanityMeetsHH/gulp-templating/blob/develop/templates/layouts/base.phtml#L11) logic with docker condition

### Removed
- Fontawesome SVG npm packages

### Fixed
- SVG [gulp task](https://github.com/InsanityMeetsHH/gulp-templating/blob/develop/gulpfile.js#L108)

## [3.0.6] - 2018-09-15
### Added
- [ESLint](https://www.npmjs.com/package/gulp-eslint)
- [SASS Lint](https://www.npmjs.com/package/gulp-sass-lint)
- Lint documentation links

### Changed
- SCSS and JaveScript files after lint has some warnings
- [License](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/package.json#L28)

### Removed
- `$baseUrl` from [`index.php`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/public/index.php) and added to layout meta

## [3.0.5] - 2018-09-06
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