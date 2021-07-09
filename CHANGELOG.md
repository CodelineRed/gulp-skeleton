# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- upgrade to gulp-sass 5
- upgrade to bootstrap 5
- upgrade to fontawesome 6 (if its released)

## [5.6.0]
### Changed
- [`class.GulpSkeleton.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/php/class.GulpSkeleton.php)
- @fortawesome/fontawesome-free 5.15.2 to 5.15.3
- browser-sync 2.26.12 to 2.27.4
- gulp-autoprefixer 7.0.1 to 8.0.0
- gulp-sass 4.1.0 to 4.1.1
- jquery 3.5.1 to 3.6.0
- vanilla-lazyload 17.3.1 to 17.4.0

## [5.5.0] - 2021-02-13
### Changed
- [`public/.htaccess`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/public/.htaccess)
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- [`.gitignore`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/.gitignore)
- @fortawesome/fontawesome-free 5.15.1 to 5.15.2
- bootstrap 4.5.3 to 4.6.0
- browser-sync 2.26.12 to 2.26.14
- gulp-favicons 2.4.0 to 3.0.0
- gulp-sourcemaps 2.6.5 to 3.0.0
- vanilla-lazyload 17.1.2 to 17.3.1

### Fixed
- port for Docker in [`base.phtml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/layouts/base.phtml)

## [5.4.0] - 2020-10-17
### Changed
- order in cleanUp task and how to remove files from js/css folder in [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- order of dependencies and devDependencies in [`package.json`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/package.json)
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- @fortawesome/fontawesome-free 5.13.0 to 5.15.1
- bootstrap 4.5.0 to 4.5.3
- browser-sync 2.26.7 to 2.26.12
- del 5.1.0 to 6.0.0
- vanilla-lazyload 16.1.0 to 17.1.2

## [5.3.0] - 2020-05-31
### Added
- gulp-favicons 2.4.0
- `favicon.png` watcher in [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- favicon task in [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- [`favicon.png`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/img/favicon.png)

### Changed
- `$info: $theme-color-1;` to `$blue: $theme-color-1;`
- order of tasks in [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- favicon html in [`index.html`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/public/index.html)
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- gulp-clean-css 4.2.0 to 4.3.0
- gulp-sass 4.0.2 to 4.1.0
- fontawesome 5.12.1 to 5.13.0
- bootstrap 4.4.1 to 4.5.0
- jquery 3.4.1 to 3.5.1
- vanilla-lazyload 13.0.1 to 16.1.0

### Removed
- `src/php/npm-postinstall.php`
- `src/img/favicons` folder
- browserSyncInit() config in [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js) and moved in [`gulpfile.json`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/gulpfile.dist.json)

## [5.2.0] - 2020-03-15
### Added
- [`src/app/lint.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/lint.js)

### Changed
- [`src/app/js-lint.json`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/js-lint.json)
- [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- `gulp-templating` to `gulp-skeleton`

## [5.1.0] - 2020-03-09
### Added
- [`src/app/is-env.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/is-env.js)
- [`gulp-if`](https://www.npmjs.com/package/gulp-if) module

### Changed
- [`.gitignore`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/.gitignore)
- [`npm-postinstall.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/php/npm-postinstall.php)
- [`docker-compose.yml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/docker-compose.yml)
- [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- Font Awesome 5.12.0 to 5.12.1
- gulp-imagemin 6.2.0 to 7.1.0
- vanilla-lazyload 8.17.0 to 13.0.1

### Removed
- gulpfile-config.dist.json and replaced with [`src/app/gulpfile.dist.json`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/gulpfile.dist.json)
- gulp-uglify and replaced with gulp-uglify-es

## [5.0.0] - 2020-01-03
### Added
- [`class.GulpSkeleton.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/php/class.GulpSkeleton.php)
- path names in `routes.php`

### Changed
- [`footer.phtml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/partials/footer.phtml)
- [`base.phtml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/layouts/base.phtml)
- [`404.phtml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/404.phtml)
- [`index.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/public/index.php)
- [`routes.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/php/routes.php)
- Font Awesome 5.11.2 to 5.12.0
- Bootstrap 4.3 to 4.4
- gulp-imagemin 6.1.1 to 6.2.0

### Removed
- `&t=XYZ` from `index.php`
- meta information from `base.phtml` and shifted to locale files
- `current_lang` cookie and replaced by `current_locale`
- `src/lang/` and replaced by `src/locale/`

## [4.5.0] - 2019-10-06
### Added
- [`404.phtml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/404.phtml)
- Social media image

### Changed
- [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- Font Awesome 5.9.0 to 5.11.2
- del 4.1.1 to 5.1.0
- gulp-autoprefixer 6.1.0 to 7.0.1
- gulp-eslint 5.0.0 to 6.0.0
- gulp-imagemin 6.0.0 to 6.1.1

## [4.4.0] - 2019-06-13
### Added
- `:not(.slick-initialized)` to `initSlider()`
- [`cssua-monitor.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/js/module/cssua-monitor.js)

### Changed
- Font Awesome 5.8.1 to 5.9.0
- cookieconsent 3.1.0 to 3.1.1
- jquery 3.3.1 to 3.4.1
- gulp-imagemin 5.0.3 to 6.0.0
- gulp 4.0.1 to 4.0.2
- browser-sync 2.26.5 to 2.26.7

## [4.3.1] - 2019-05-02
### Added
- `RewriteBase /` to [`.htaccess`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/public/.htaccess)
- `is_writable` condition to [`npm-postinstall.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/php/npm-postinstall.php)

### Changed
- word `templating` to `skeleton` in some places
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- Font Awesome 5.7 to 5.8
- browser-sync 2.26.3 to 2.26.5
- del 4.0 to 4.1.1
- gulp 4.0.0 to 4.0.1
- gulp-autoprefixer 6.0 to 6.1
- gulp-clean-css 4.0 to 4.2

### Fixed
- override existing `gulpfile-config.json`

## [4.3.0] - 2019-03-10
### Added
- Wrap around cookie consent
- [`slider.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/js/module/slider.js)
- [`image-lazyLoad.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/js/module/image-lazyLoad.js)
- sass-lint and eslint disable rules where it has to be
- all Bootstrap utilities line by line
- Website urls as comments in scss files
- [`routes.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/php/routes.php)
- [`gulpfile-config.dist.json`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile-config.dist.json)
- `postinstall` script in [`npm-postinstall.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/php/npm-postinstall.php)

### Changed
- Insert `a` tag styling to [`page.scss`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/scss/module/page.scss)
- [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- `$paths` to `$routes`
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- Font Awesome 5.6 to 5.7
- Bootstrap 4.2 to 4.3
- del 3.0 to 4.0
- [`.gitignore`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/.gitignore)
- h1 font size to mobile first
- [`modal.phtml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/partials/modal.phtml)

## [4.2.0] - 2019-01-27
### Added
- Speaking URL handling
- Localization
- Header and Footer partials

## [4.1.0] - 2019-01-15
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
- [`.gitignore`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/.gitignore)
- gulp-clean-css 3 to 4
- Package name from gulp-skeleton to gulp-skeleton

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
- [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js) inline comments
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)

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
- [`CHANGELOG.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/CHANGELOG.md)
- [`docker-compose.yml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/docker-compose.yml)
- Slick Carousel [`ajax-loader.gif`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/img/slick/ajax-loader.gif)
- [Docker installation documentation](https://github.com/InsanityMeetsHH/gulp-skeleton#installation-with-docker)

### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- [`$baseUrl`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/layouts/base.phtml#L11) logic with docker condition

### Removed
- Fontawesome SVG npm packages

### Fixed
- SVG [gulp task](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js#L108)

## [3.0.6] - 2018-09-15
### Added
- [ESLint](https://www.npmjs.com/package/gulp-eslint)
- [SASS Lint](https://www.npmjs.com/package/gulp-sass-lint)
- Lint documentation links

### Changed
- SCSS and JaveScript files after lint has some warnings
- [License](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/package.json#L28)

### Removed
- `$baseUrl` from [`index.php`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/public/index.php) and added to layout meta

## [3.0.5] - 2018-09-06
### Added
- Dynamic [`baseUrl`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/layouts/base.phtml#L15)

### Changed
- [`.htaccess`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/public/.htaccess)

## [3.0.4] - 2018-09-05
### Added
- [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- Image compress settings in [`gulpfile.js`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js)
- [SVG extension](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js#L80) to img gulp task

### Changed
- Disabled page reload on cookieconsent button click

### Removed
- css property prefixes from scss files
- icon folder regex from img gulp task

## [3.0.2] - 2018-08-17
### Added
- Version number to JavaScript and CSS file in [`base.phtml`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/layouts/base.phtml)

### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- [`.htaccess`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/public/.htaccess)


## [3.0.1] - 2018-07-29
### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- Disabled FA 5 [webfont import](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js#L99)
- From Fontawesome 5.1 to 5.2
- From Bootstrap 4.1.1 to 4.1.3
- From Cookieconsent 3.0.6 to 3.1
- From LazyLoad 8.7 to 8.11
- Fontawesome [font weights](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/scss/lib/fontawesome.scss#L3-L5)
- Disabled [Fontawesome CSS](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/scss/styles.scss#L4) replaced by [Fontawesome JavaScript](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/gulpfile.js#L50)

## [3.0.0] - 2018-07-23
### Added
- [Fontawesome 5.1](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/package.json#L49) as default version

### Changed
- [`README.md`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/README.md)
- [`baseUrl`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/templates/layouts/base.phtml#L15)

### Removed
- Fontawesome 5.0