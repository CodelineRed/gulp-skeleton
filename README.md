# Gulp Templating - InsanityMeetsHH

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
* PHP => 5.3
* [Docker](https://www.docker.com/) ([for installation with Docker](https://github.com/InsanityMeetsHH/gulp-templating#installation-with-docker))

## Installation (Recommended)
```bash
$ git clone https://github.com/InsanityMeetsHH/gulp-templating.git [project-name]
$ cd [project-name]
$ rm -rf .git
$ npm i
```
Change `localServer` in [gulpfile.js](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js#L14) to your local server.

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
* Get this project via `$ git clone` or zip download
* Open a command prompt on your OS (if not already open) and navigate to the project folder
* `$ npm i`
* `$ gulp prod`
* `$ docker-compose up -d`
* Open [localhost:8080](http://localhost:8080) for website
* If you want to remove a container `$ docker rm [container-name] -f` e.g. `$ docker rm gulp-templating -f`
* If you want to remove a volume `$ docker volume rm [volume-name]` e.g. `$ docker volume rm imhh-gulp_logs` (first remove matching container)
* If you want to remove all container `$ docker rm $(docker ps -a -q) -f`
* If you want to remove all volumes `$ docker volume prune` (first remove all container)

## Links
* [ESLint Rules](https://eslint.org/docs/rules/)
* [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
