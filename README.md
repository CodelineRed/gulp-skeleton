# Gulp Skeleton - InsanityMeetsHH

[**Demo page**](http://gulp.insanitymeetshh.net)

## Included
* [jQuery 3](http://jquery.com)
* [Bootstrap 4](https://getbootstrap.com)
* [Font Awesome 5](https://fontawesome.com)
* [Slick Carousel 1](http://kenwheeler.github.io/slick/)
* [LazyLoad 8](https://www.andreaverlicchi.eu/lazyload/)
* [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
* [Cookieconsent 3](https://github.com/insites/cookieconsent)

## Required
* [Node.js](http://nodejs.org/en/download/)
* [npm](http://www.npmjs.com/get-npm) `$ npm i npm@latest -g`
* [gulp-cli](https://www.npmjs.com/package/gulp-cli) `$ npm i gulp-cli@latest -g`
* PHP >= 5.3
* [Docker](https://www.docker.com/) ([for installation with Docker](https://github.com/InsanityMeetsHH/gulp-templating#installation-with-docker))

## Installation (Recommended)
```bash
$ git clone https://github.com/InsanityMeetsHH/gulp-templating.git [project-name]
$ cd [project-name]
$ rm -rf .git
$ npm i
$ gulp build
```
Change [`gulpfile.json`](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/src/app/gulpfile.dist.json) if necessary.

Possible local servers (examples): http://imhh-gulp.localhost/ or http://localhost/imhh-gulp/public/.

## Project Commands
|               | Description                                                                                                     |
|---------------|-----------------------------------------------------------------------------------------------------------------|
| gulp          | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                 |
| gulp build    | executes following tasks: cleanUp, scss, js, scssLint, jsLint, img, font, svg                                   |
| gulp cleanUp  | clean up public folder                                                                                          |
| gulp font     | copy font                                                                                                       |
| gulp img      | compress/copy img                                                                                               |
| gulp js       | uglify/minify/concat js                                                                                         |
| gulp jsLint   | checks js follows [lint rules](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/js-lint.json)     |
| gulp scss     | compile/minify/concat scss                                                                                      |
| gulp scssLint | checks scss follows [lint rules](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/scss-lint.json) |
| gulp svg      | compress/copy svg                                                                                               |
| gulp watch    | watch scss, js, img, font and svg files                                                                         |

## Installation with [Docker](https://www.docker.com/)
* Get project via `$ git clone https://github.com/InsanityMeetsHH/gulp-skeleton.git` or [zip download](https://github.com/InsanityMeetsHH/gulp-skeleton/archive/master.zip)
* Open a command prompt on your OS (if not already open) and navigate to the project folder
* `$ npm i`
* `$ gulp build`
* `$ docker-compose up -d`
* Open [localhost:3050](http://localhost:3050) for website
* If you want to remove the container `$ docker rm gulp-skeleton -f`
* If you want to remove the volume `$ docker volume rm DIRNAME_logs` (first remove matching container)

## Links
* [ESLint Rules](https://eslint.org/docs/rules/)
* [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
