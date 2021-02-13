# Gulp Skeleton - InsanityMeetsHH

[**Demo page**](http://gulp.insanitymeetshh.net)

## Table of contents
- [Included Third Party Code](#included)
- Install Guides
    - [Install Production Build (Recommended)](#install-production-build-recommended)
    - [Install Master/ Develop Build](#install-master-develop-build)
    - [Install PHP (optional)](#install-php-optional)
- [Project Commands](#project-commands)
- [`gulpfile.json`](#gulpfilejson)
- [Localization](#localization)
- [Links](#links)

## Included
- [jQuery 3](http://jquery.com)
- [Bootstrap 4](https://getbootstrap.com)
- [Font Awesome 5](https://fontawesome.com)
- [Slick Carousel 1](http://kenwheeler.github.io/slick/)
- [LazyLoad 17](https://www.andreaverlicchi.eu/vanilla-lazyload/)
- [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
- [Cookieconsent 3](https://github.com/insites/cookieconsent)

## Install Production Build (Recommended)
### Required
- PHP >= 5.3

[Download zip](https://github.com/InsanityMeetsHH/gulp-skeleton/archive/production.zip) if you don't have git on your OS.
Open console on your OS and navigate to your project folder.
```bash
$ git clone https://github.com/InsanityMeetsHH/gulp-skeleton.git
$ cd gulp-skeleton
$ git checkout production
$ (optional on unix) rm -rf .git
$ (optional on windows) rmdir .git /s
```
If you need PHP, you have to go to [Install PHP](#install-php-optional).

## Install Master/ Develop Build
### Required
- [Node.js](http://nodejs.org/en/download/)
- [npm](http://www.npmjs.com/get-npm) `$ npm i npm@latest -g`
- [gulp-cli](https://www.npmjs.com/package/gulp-cli) `$ npm i gulp-cli@latest -g`

[Download zip](https://github.com/InsanityMeetsHH/gulp-skeleton/archive/master.zip) if you don't have git on your OS.
Open 2 consoles on your OS and navigate both to your project folder.
```bash
$ git clone https://github.com/InsanityMeetsHH/gulp-skeleton.git
$ cd gulp-skeleton
$ (optional) git checkout develop
$ (optional on unix) rm -rf .git
$ (optional on windows) rmdir .git /s
$ npm i
$ gulp build
```

## Install PHP (optional)
### Required
- [Docker](https://www.docker.com/)

Open console on your OS and navigate to the unziped/ cloned app folder.
```bash
$ (unix) systemctl docker start
$ (windows) "c:\path\to\Docker Desktop.exe"
$ docker-compose up -d
```
Open [localhost:3050](http://localhost:3050) for Website.

## Project Commands
|               | Description                                                                                                                            |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
| gulp          | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                                        |
| gulp build    | executes following tasks: cleanUp, favicon, font, img, js, jsLint, scss, scssLint, svg                                                 |
| gulp lintAll  | executes following tasks: jsLint, scssLint                                                                                             |
| gulp cleanUp  | clean up public folder                                                                                                                 |
| gulp favicon  | generate favicons                                                                                                                      |
| gulp font     | copy font files                                                                                                                        |
| gulp img      | copy and compress images                                                                                                               |
| gulp js       | uglify, minify and concat js files                                                                                                     |
| gulp jsLint   | checks js follows [lint rules](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/js-lint.json)                      |
| gulp scss     | compile, minify and concat scss files                                                                                                  |
| gulp scssLint | checks scss follows [lint rules](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/scss-lint.json)                  |
| gulp svg      | copy and compress svg files                                                                                                            |
| gulp watch    | watch favicon, font, img, js, scss and svg files                                                                                       |

## [`gulpfile.json`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/app/gulpfile.dist.json)
|                     | Description                                                                                                                      |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------|
| browserSyncConfig   | Required - Defines which config is used for [BrowserSync](https://www.npmjs.com/package/browser-sync) (default: browserSyncDev)  |
| sourcePath          | Required - Path to raw files (default: src/)                                                                                     |
| publicPath          | Required - Path to transpiled files (default: public/)                                                                           |
| systemPath          | Optional - Alternative Path to transpiled files on CMS, ECS, PHP Framework, ... (default: path/to/system/)                       |
| env                 | Required - Environment dev, test or prod (default: dev)                                                                          |

## Localization
- [`src/locale/`](https://github.com/InsanityMeetsHH/gulp-skeleton/blob/master/src/locale/)

## Links
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
