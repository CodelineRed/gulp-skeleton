# Gulp Skeleton - CodelineRed

[**Demo page**](https://gulp.codelinered.net)

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
- [Bootstrap 5](https://getbootstrap.com)
- [Font Awesome 6](https://fontawesome.com)
- [Slick Carousel 1](http://kenwheeler.github.io/slick/)
- [LazyLoad 17](https://www.andreaverlicchi.eu/vanilla-lazyload/)
- [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
- [Cookieconsent 3](https://github.com/insites/cookieconsent)

## Install Production Build (Recommended)
### Required
- PHP >= 5.5

Open console on your OS and navigate to your project folder.
[Download zip](https://github.com/CodelineRed/gulp-skeleton/archive/production.zip) if you don't have git on your OS.
```bash
+++++ ZIP VERSION +++++
$ (unix) wget -O gs-prod.zip https://github.com/CodelineRed/gulp-skeleton/archive/production.zip
$ (unix) unzip gs-prod.zip
$ (win10) curl -L -o gs-prod.zip https://github.com/CodelineRed/gulp-skeleton/archive/production.zip
$ (win10) tar -xf gs-prod.zip
$ cd gulp-skeleton-production
```

```bash
+++++ GIT VERSION +++++
$ git clone https://github.com/CodelineRed/gulp-skeleton.git
$ cd gulp-skeleton
$ git checkout production
$ (optional on unix) rm -rf .git
$ (optional on win10) rmdir .git /s
```

```bash
+++++ COMPOSER VERSION +++++
$ php composer create-project codelinered/gulp-skeleton gulp-skeleton "dev-production"
$ cd gulp-skeleton
```
If you need PHP, you have to go to [Install PHP](#install-php-optional).

## Install Master/ Develop Build
### Required
- [Node.js](http://nodejs.org/en/download/) >= 12.20
- [npm](http://www.npmjs.com/get-npm) `$ npm i npm@latest -g`
- [gulp-cli](https://www.npmjs.com/package/gulp-cli) `$ npm i gulp-cli@latest -g`

Open console on your OS and navigate to your project folder.
[Download zip](https://github.com/CodelineRed/gulp-skeleton/archive/master.zip) if you don't have git on your OS.
```bash
+++++ ZIP VERSION +++++
$ (unix) wget -O gs-mstr.zip https://github.com/CodelineRed/gulp-skeleton/archive/master.zip
$ (unix) unzip gs-mstr.zip
$ (win10) curl -L -o gs-mstr.zip https://github.com/CodelineRed/gulp-skeleton/archive/master.zip
$ (win10) tar -xf gs-mstr.zip
$ cd gulp-skeleton-master
$ npm i
$ gulp build
$ gulp
```

```bash
+++++ GIT VERSION +++++
$ git clone https://github.com/CodelineRed/gulp-skeleton.git
$ cd gulp-skeleton
$ git checkout master
$ (optional on unix) rm -rf .git
$ (optional on win10) rmdir .git /s
$ npm i
$ gulp build
$ gulp
```

```bash
+++++ COMPOSER VERSION +++++
$ php composer create-project codelinered/gulp-skeleton
$ cd gulp-skeleton
$ npm i
$ gulp build
$ gulp
```
Open [localhost:3000](http://localhost:3000) for Website.

## Install PHP (optional)
### Required
- [Docker](https://www.docker.com/)

Open console on your OS and navigate to the unziped/ cloned app folder.
```bash
$ (unix) systemctl docker start
$ (windows) "c:\path\to\Docker Desktop.exe"
$ docker-compose up -d
```
Open [localhost:7701](http://localhost:7701) for Website.

## Project Commands
|               | Description                                                                                                                              |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| gulp          | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                                          |
| gulp build    | executes following tasks: cleanUp, favicon, font, img, js, jsLint, scss, scssLint, svg                                                   |
| gulp lintAll  | executes following tasks: jsLint, scssLint                                                                                               |
| gulp cleanUp  | clean up public folder                                                                                                                   |
| gulp favicon  | generate favicons                                                                                                                        |
| gulp font     | copy font files                                                                                                                          |
| gulp img      | copy and compress images                                                                                                                 |
| gulp js       | uglify, minify and concat js files                                                                                                       |
| gulp jsLint   | checks js follows [lint rules](https://github.com/CodelineRed/gulp-skeleton/blob/master/src/app/js-lint.json)                            |
| gulp scss     | compile, minify and concat scss files                                                                                                    |
| gulp scssLint | checks scss follows [lint rules](https://github.com/CodelineRed/gulp-skeleton/blob/master/src/app/scss-lint.json)                        |
| gulp thankYou | a small thank for you                                                                                                                    |
| gulp svg      | copy and compress svg files                                                                                                              |
| gulp watch    | watch favicon, font, img, js, scss and svg files                                                                                         |

## [`gulpfile.json`](https://github.com/CodelineRed/gulp-skeleton/blob/master/src/app/gulpfile.dist.json)
|                     | Description                                                                                                                        |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------|
| browserSyncConfig   | Required - Defines which config is used for [BrowserSync](https://www.npmjs.com/package/browser-sync) (default: browserSyncDocker) |
| sourcePath          | Required - Path to raw files (default: src/)                                                                                       |
| publicPath          | Required - Path to transpiled files (default: public/)                                                                             |
| systemPath          | Optional - Alternative Path to transpiled files on CMS, ECS, PHP Framework, ... (default: path/to/system/)                         |
| env                 | Required - Environment dev, test or prod (default: dev)                                                                            |

## Localization
- [`src/locale/`](https://github.com/CodelineRed/gulp-skeleton/blob/master/src/locale/)

## Links
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
