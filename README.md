# Gulp Templating - InsanityMeetsHH

[**Demo page**](http://gulp.insanitymeetshh.net)

## Included
* [jQuery 3.3.1](http://jquery.com)
* [Bootstrap 4.1.1](https://getbootstrap.com)
* [Font Awesome 5.0.13](https://fontawesome.com) (Activated)
* [Font Awesome 5.1.0-4](https://fontawesome.com) (Deactivated)
* [Slick Carousel 1.8.1](http://kenwheeler.github.io/slick/)
* [LazyLoad 8.7.1](https://www.andreaverlicchi.eu/lazyload/)
* [CSS User Agent 2.1.31](https://www.npmjs.com/package/cssuseragent)
* [Cookieconsent 3.0.6](https://github.com/insites/cookieconsent)

## Required
* [Node.js](http://nodejs.org/en/download/)
* [npm](http://www.npmjs.com/get-npm)
* PHP => 5.3

## Install
```bash
$ git clone https://github.com/InsanityMeetsHH/gulp-templating.git [project-name]
$ cd [project-name]
$ rm -rf .git
$ npm i
```

## How to enable Font Awesome 5.1
comment out
* [styles.scss](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/scss/styles.scss#L4)
* gulpfile.js [section 1](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L32) [section 2](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L65)

comment in
* [styles.scss](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/scss/styles.scss#L5)
* gulpfile.js [section 1](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L33-L36) [section 2](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L66)

## Project Commands
See gulpfile.js for further information.
```bash
$ gulp
$ gulp dev
$ gulp prod
$ gulp watch
```