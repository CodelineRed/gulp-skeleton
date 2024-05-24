# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [6.5.0] - 2024-05-26
### Added
- new scripts in [`package.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/package-lock.json)

### Changed
- [`layout/base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)
- [`template/404.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/404.phtml)
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- @fancyapps/ui 5.0.28 to 5.0.36
- @fortawesome/fontawesome-free 6.4.2 to 6.5.2
- bootstrap 5.3.2 to 5.3.3
- browser-sync 2.29.3 to 3.0.2
- sass 1.64 to 1.77.2
- vanilla-lazyload 17.8.5 to 19.1.3

### Fixed
- watchAndReload in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)

## [6.4.0] - 2023-11-19
### Added
- [`social-media.jpg`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/img/social-media.jpg)
- `mb-3` to "included" in [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- `getPageTitle()` in [`php/GulpSkeleton.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/GulpSkeleton.php)

### Changed
- [`locale/de_de.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/de_de.php)
- [`locale/en_us.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/en_us.php)
- [`layout/base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)
- [`partial/footer.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/footer.phtml)
- [`partial/header.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/header.phtml)
- Bootstrap icon in [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- dummy image URL in [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- @fancyapps/ui 5.0.24 to 5.0.28

### Removed
- `img/general-ci.jpg`

### Fixed
- spacing between globe and chevron in [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- footer margin bottom in [`module/cookieconsent.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/cookieconsent.scss)

## [6.3.0] - 2023-10-21
### Added
- [`module/_locale_.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/_locale_.js)
- [`module/fancyapps.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/fancyapps.js)
- [`plugin/fancyapps.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/plugin/fancyapps.scss)
- [`module/theme-switcher.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/theme-switcher.js)
- [`module/theme-switcher.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/theme-switcher.scss)
- imports for Font Awesome PRO in [`lib/fontawesome.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/lib/fontawesome.scss)
- @fancyapps/ui 5.0.24

### Changed
- [`js/scripts.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/scripts.js)
- [`locale/de_de.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/de_de.php)
- [`locale/en_us.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/en_us.php)
- [`layout/base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)
- [`partial/header.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/header.phtml)
- [`partial/modal.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/modal.phtml)
- [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- bootstrap 5.3.1 to 5.3.2
- vanilla-lazyload 17.8.4 to 17.8.5

### Removed
- underscore `_` from all [`module/_*.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/)
- `module/modal.scss`

## [6.2.0] - 2023-09-13
### Added
- [`template/about.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/about.phtml)

### Changed
- [`module/cookieconsent.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/cookieconsent.js)
- [`locale/de_de.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/de_de.php)
- [`locale/en_us.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/en_us.php)
- [`php/routes.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/routes.php)
- [`lib/bootstrap.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/lib/bootstrap.scss)
- [`module/_cookieconsent.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/_cookieconsent.scss)
- [`module/_slider.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/_slider.scss)
- [`scss/_variables.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/_variables.scss)
- [`layout/base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)
- [`partial/footer.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/footer.phtml)
- [`partial/header.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/header.phtml)
- [`partial/modal.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/modal.phtml)
- [`template/404.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/404.phtml)
- [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- [`docker-compose.yml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/docker-compose.yml)
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- @fortawesome/fontawesome-free 6.2.1 to 6.4.2
- bootstrap 5.2.3 to 5.3.1
- browser-sync 2.27.11 to 2.29.3
- jquery 3.6.2 to 3.7.1
- sass 1.57.0 to 1.64.2
- vanilla-lazyload 17.8.3 to 17.8.4

## [6.1.0] - 2022-12-20
### Added
- `thankYou()` in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`composer.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/composer.json)
- [`package-lock.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/package-lock.json) back again
- chalk 4.1.2

### Changed
- [`scss/_variables.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/_variables.scss)
- nickname in [`partial/modal.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/modal.phtml)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- browser-sync 2.27.10 to 2.27.11
- jquery 3.6.1 to 3.6.2
- sass 1.56.1 to 1.57.0

### Removed
- button hover style in [`module/_general.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/_general.scss)
- active class in [`template/404.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/404.phtml)

### Fixed
- BrowserSync view (http://localhost:3000/)

## [6.0.1] - 2022-11-27
### Changed
- host in [`public/.htaccess`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/.htaccess)
- nickname in [`locale/de_de.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/de_de.php)
- nickname in [`locale/en_us.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/en_us.php)
- button hover style in [`module/_cookieconsent.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/_cookieconsent.scss)
- button hover style in [`module/_general.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/_general.scss)
- theme color and link decoration in [`scss/_variables.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/_variables.scss)
- headline dynamic and lazy load image colors in [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- php 7 to php 8 in [`docker-compose.yml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/docker-compose.yml)
- nickname in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)

## [6.0.0] - 2022-11-23
### Added
- `getVersion()` in [`php/GulpSkeleton.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/GulpSkeleton.php)
- `setVersion($version)` in [`php/GulpSkeleton.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/GulpSkeleton.php)
- `setVersionFromPackage()` in [`php/GulpSkeleton.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/GulpSkeleton.php)
- version in [`partial/footer.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/footer.phtml)

### Changed
- import in [`lib/bootstrap.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/lib/bootstrap.scss)
- import in [`lib/fontawesome.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/lib/fontawesome.scss)
- data attributes for BS5 [`module/cookieconsent.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/cookieconsent.js)
- [`js/scripts.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/scripts.js)
- [`locale/de_de.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/de_de.php)
- [`locale/en_us.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/en_us.php)
- `php/class.GulpSkeleton.php` to [`php/GulpSkeleton.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/GulpSkeleton.php)
- data attributes for BS5 [`partial/footer.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/footer.phtml)
- data attributes for BS5 [`partial/modal.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/modal.phtml)
- tooltip example for BS5 [`template/index.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/index.phtml)
- Docker port from 3050 to 7701 in [`layout/base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)
- Docker port from 3050 to 7701 in [`app/gulpfile.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/gulpfile.dist.json)
- Docker port from 3050 to 7701 in [`docker-compose.yml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/docker-compose.yml)
- `templates` to [`template`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template)
- `templates/partials` to [`template/partial`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial)
- `templates/layouts` to [`template/layout`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- [`.gitignore`](https://github.com/CodelineRed/gulp-skeleton/blob/main/.gitignore)
- @fortawesome/fontawesome-free 5.15.4 to 6.2.1
- bootstrap 4.6.0 to 5.2.3
- browser-sync 2.27.5 to 2.27.10
- del 6.0.0 to 6.1.1
- gulp-sass 5.0.0 to 5.1.0
- jquery 3.6.0 to 3.6.1
- sass 1.32.13 to 1.56.1
- vanilla-lazyload 17.4.0 to 17.8.3

### Removed
- unnecessary close button variables in [`scss/_variables.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/_variables.scss)

## [5.8.0] - 2021-12-11
### Changed
- [`.gitignore`](https://github.com/CodelineRed/gulp-skeleton/blob/main/.gitignore)
- link to documentation in [`lib/bootstrap.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/lib/bootstrap.scss)

### Fixed
- favicon path in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)

### Removed
- `package-lock.json`

## [5.7.0] - 2021-11-19
### Added
- `engines` to [`package.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/package.json)
- sass 1.32.13

### Changed
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- @fortawesome/fontawesome-free 5.15.3 to 5.15.4
- browser-sync 2.27.4 to 2.27.5
- gulp-sass 4.1.1 to 5.0.0
- gulp-uglify-es 2.0.0 to 3.0.0

## [5.6.0] - 2021-07-09
### Changed
- [`class.GulpSkeleton.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/class.GulpSkeleton.php)
- @fortawesome/fontawesome-free 5.15.2 to 5.15.3
- browser-sync 2.26.12 to 2.27.4
- gulp-autoprefixer 7.0.1 to 8.0.0
- gulp-sass 4.1.0 to 4.1.1
- jquery 3.5.1 to 3.6.0
- vanilla-lazyload 17.3.1 to 17.4.0

## [5.5.0] - 2021-02-13
### Changed
- [`public/.htaccess`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/.htaccess)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- [`.gitignore`](https://github.com/CodelineRed/gulp-skeleton/blob/main/.gitignore)
- @fortawesome/fontawesome-free 5.15.1 to 5.15.2
- bootstrap 4.5.3 to 4.6.0
- browser-sync 2.26.12 to 2.26.14
- gulp-favicons 2.4.0 to 3.0.0
- gulp-sourcemaps 2.6.5 to 3.0.0
- vanilla-lazyload 17.1.2 to 17.3.1

### Fixed
- port for Docker in [`base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)

## [5.4.0] - 2020-10-17
### Changed
- order in cleanUp task and how to remove files from js/css folder in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- order of dependencies and devDependencies in [`package.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/package.json)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- @fortawesome/fontawesome-free 5.13.0 to 5.15.1
- bootstrap 4.5.0 to 4.5.3
- browser-sync 2.26.7 to 2.26.12
- del 5.1.0 to 6.0.0
- vanilla-lazyload 16.1.0 to 17.1.2

## [5.3.0] - 2020-05-31
### Added
- gulp-favicons 2.4.0
- `favicon.png` watcher in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- favicon task in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`favicon.png`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/img/favicon.png)

### Changed
- `$info: $theme-color-1;` to `$blue: $theme-color-1;`
- order of tasks in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- favicon html in [`index.html`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/index.html)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- gulp-clean-css 4.2.0 to 4.3.0
- gulp-sass 4.0.2 to 4.1.0
- fontawesome 5.12.1 to 5.13.0
- bootstrap 4.4.1 to 4.5.0
- jquery 3.4.1 to 3.5.1
- vanilla-lazyload 13.0.1 to 16.1.0

### Removed
- `src/php/npm-postinstall.php`
- `src/img/favicons` folder
- browserSyncInit() config in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js) and moved in [`gulpfile.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/gulpfile.dist.json)

## [5.2.0] - 2020-03-15
### Added
- [`src/app/lint.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/lint.js)

### Changed
- [`src/app/js-lint.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/js-lint.json)
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- `gulp-templating` to `gulp-skeleton`

## [5.1.0] - 2020-03-09
### Added
- [`src/app/is-env.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/is-env.js)
- [`gulp-if`](https://www.npmjs.com/package/gulp-if) module

### Changed
- [`.gitignore`](https://github.com/CodelineRed/gulp-skeleton/blob/main/.gitignore)
- [`npm-postinstall.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/npm-postinstall.php)
- [`docker-compose.yml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/docker-compose.yml)
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- Font Awesome 5.12.0 to 5.12.1
- gulp-imagemin 6.2.0 to 7.1.0
- vanilla-lazyload 8.17.0 to 13.0.1

### Removed
- gulpfile-config.dist.json and replaced with [`src/app/gulpfile.dist.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/gulpfile.dist.json)
- gulp-uglify and replaced with gulp-uglify-es

## [5.0.0] - 2020-01-03
### Added
- [`class.GulpSkeleton.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/class.GulpSkeleton.php)
- path names in `routes.php`

### Changed
- [`footer.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/footer.phtml)
- [`base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)
- [`404.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/404.phtml)
- [`index.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/index.php)
- [`routes.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/routes.php)
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
- [`404.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/404.phtml)
- Social media image

### Changed
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- Font Awesome 5.9.0 to 5.11.2
- del 4.1.1 to 5.1.0
- gulp-autoprefixer 6.1.0 to 7.0.1
- gulp-eslint 5.0.0 to 6.0.0
- gulp-imagemin 6.0.0 to 6.1.1

## [4.4.0] - 2019-06-13
### Added
- `:not(.slick-initialized)` to `initSlider()`
- [`cssua-monitor.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/cssua-monitor.js)

### Changed
- Font Awesome 5.8.1 to 5.9.0
- cookieconsent 3.1.0 to 3.1.1
- jquery 3.3.1 to 3.4.1
- gulp-imagemin 5.0.3 to 6.0.0
- gulp 4.0.1 to 4.0.2
- browser-sync 2.26.5 to 2.26.7

## [4.3.1] - 2019-05-02
### Added
- `RewriteBase /` to [`.htaccess`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/.htaccess)
- `is_writable` condition to [`npm-postinstall.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/npm-postinstall.php)

### Changed
- word `templating` to `skeleton` in some places
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
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
- [`slider.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/slider.js)
- [`image-lazyLoad.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/js/module/image-lazyLoad.js)
- sass-lint and eslint disable rules where it has to be
- all Bootstrap utilities line by line
- Website urls as comments in scss files
- [`routes.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/routes.php)
- [`gulpfile-config.dist.json`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile-config.dist.json)
- `postinstall` script in [`npm-postinstall.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/php/npm-postinstall.php)

### Changed
- Insert `a` tag styling to [`page.scss`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/module/page.scss)
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- `$paths` to `$routes`
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- Font Awesome 5.6 to 5.7
- Bootstrap 4.2 to 4.3
- del 3.0 to 4.0
- [`.gitignore`](https://github.com/CodelineRed/gulp-skeleton/blob/main/.gitignore)
- h1 font size to mobile first
- [`modal.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/partial/modal.phtml)

## [4.2.0] - 2019-01-27
### Added
- Speaking URL handling
- Localization
- Header and Footer partial

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
- [`.gitignore`](https://github.com/CodelineRed/gulp-skeleton/blob/main/.gitignore)
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
- [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js) inline comments
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)

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
- [`CHANGELOG.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/CHANGELOG.md)
- [`docker-compose.yml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/docker-compose.yml)
- Slick Carousel [`ajax-loader.gif`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/img/slick/ajax-loader.gif)
- [Docker installation documentation](https://github.com/CodelineRed/gulp-skeleton#installation-with-docker)

### Changed
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- [`$baseUrl`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml#L11) logic with docker condition

### Removed
- Fontawesome SVG npm packages

### Fixed
- SVG [gulp task](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js#L108)

## [3.0.6] - 2018-09-15
### Added
- [ESLint](https://www.npmjs.com/package/gulp-eslint)
- [SASS Lint](https://www.npmjs.com/package/gulp-sass-lint)
- Lint documentation links

### Changed
- SCSS and JaveScript files after lint has some warnings
- [License](https://github.com/CodelineRed/gulp-skeleton/blob/main/package.json#L28)

### Removed
- `$baseUrl` from [`index.php`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/index.php) and added to layout meta

## [3.0.5] - 2018-09-06
### Added
- Dynamic [`baseUrl`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml#L15)

### Changed
- [`.htaccess`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/.htaccess)

## [3.0.4] - 2018-09-05
### Added
- [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- Image compress settings in [`gulpfile.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js)
- [SVG extension](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js#L80) to img gulp task

### Changed
- Disabled page reload on cookieconsent button click

### Removed
- css property prefixes from scss files
- icon folder regex from img gulp task

## [3.0.2] - 2018-08-17
### Added
- Version number to JavaScript and CSS file in [`base.phtml`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml)

### Changed
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- [`.htaccess`](https://github.com/CodelineRed/gulp-skeleton/blob/main/public/.htaccess)


## [3.0.1] - 2018-07-29
### Changed
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- Disabled FA 5 [webfont import](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js#L99)
- From Fontawesome 5.1 to 5.2
- From Bootstrap 4.1.1 to 4.1.3
- From Cookieconsent 3.0.6 to 3.1
- From LazyLoad 8.7 to 8.11
- Fontawesome [font weights](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/lib/fontawesome.scss#L3-L5)
- Disabled [Fontawesome CSS](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/scss/styles.scss#L4) replaced by [Fontawesome JavaScript](https://github.com/CodelineRed/gulp-skeleton/blob/main/gulpfile.js#L50)

## [3.0.0] - 2018-07-23
### Added
- [Fontawesome 5.1](https://github.com/CodelineRed/gulp-skeleton/blob/main/package.json#L49) as default version

### Changed
- [`README.md`](https://github.com/CodelineRed/gulp-skeleton/blob/main/README.md)
- [`baseUrl`](https://github.com/CodelineRed/gulp-skeleton/blob/main/template/layout/base.phtml#L15)

### Removed
- Fontawesome 5.0