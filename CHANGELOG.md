# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 4.3.1
### Added
- `RewriteBase /` to [`.htaccess`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/public/.htaccess)
- `is_writable` condition to [`npm-postinstall.php`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/php/npm-postinstall.php)

### Changed
- word `templating` to `skeleton` in some places
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)
- Font Awesome 5.7 to Font Awesome 5.8
- jQuery 3.3 to jQuery 3.4
- del 4.0 to del 4.1

### Fixed
- override existing `gulpfile-config.json`

## 4.3.0 - 2019-03-10
### Added
- Wrap around cookie consent
- [`slider.js`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/js/module/slider.js)
- [`image-lazyLoad.js`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/js/module/image-lazyLoad.js)
- sass-lint and eslint disable rules where it has to be
- all Bootstrap utilities line by line
- Website urls as comments in scss files
- [`routes.php`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/php/routes.php)
- [`gulpfile-config.dist.json`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile-config.dist.json)
- `postinstall` script in [`npm-postinstall.php`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/php/npm-postinstall.php)

### Changed
- Insert `a` tag styling to [`page.scss`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/scss/module/page.scss)
- [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js)
- `$paths` to `$routes`
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)
- Font Awesome 5.6 to Font Awesome 5.7
- Bootstrap 4.2 to Bootstrap 4.3
- del 3.0 to del 4.0
- gitignore
- h1 font size to mobile first
- [`modal.phtml`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/templates/partials/modal.phtml)

## 4.2.0 - 2019-01-27
### Added
- Speaking URL handling
- Localization
- Header and Footer partials

## 4.1.0 - 2019-01-15
### Added
- Privacy Policy Modal
- Bootstrap variables to `_variables.scss`
- Styling for Cookie Consent revoke button
- `_slick.scss` file
- `_modal.scss` file
- `package-lock.json`

### Changed
- Styling of cookie layer
- Behavior of remove bottom margin from `.container` without remove `.cc-window`
- Placeholder image url from http to https
- `.gitignore`
- Gulp clean css dependency from v3 to v4
- Package name from gulp-templating to gulp-skeleton

### Removed
- Styles in `_page.scss` replaced by Bootstrap variables
- SCSS variable `$lightblue` and replaced by `$theme-color-1`
- SCSS variable `$darkgrey` and replaced by `$theme-color-2`
- SCSS variable `$lightgrey` and replaced by `$theme-color-3`
- SCSS variable `$grey` and replaced by `$theme-color-4`
- `palette` from `cookieconsent.js` and replaced by CSS in `_cookieconsent.scss`

## [4.0.0] - 2019-01-11
### Added
- Gulp 4 task syntax
- [toasts](https://getbootstrap.com/docs/4.2/components/toasts/) and [spinners](https://getbootstrap.com/docs/4.2/components/spinners/) component to `bootstrap.scss`
- mobileFirst to brand slider config

### Changed
- Bootstrap dependency to 4.2.1
- [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js) inline comments
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)

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
- [`docker-compose.yml`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/docker-compose.yml)
- Slick Carousel [`ajax-loader.gif`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/img/slick/ajax-loader.gif)
- [Docker installation documentation](https://github.com/InsanityMeetsHH/gulp-templating#installation-with-docker)

### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/README.md)
- [`$baseUrl`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/templates/layouts/base.phtml#L11) logic with docker condition

### Removed
- Fontawesome SVG npm packages

### Fixed
- SVG [gulp task](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L108)

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