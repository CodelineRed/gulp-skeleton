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

## Project Commands
See [gulpfile.js](https://github.com/InsanityMeetsHH/gulp-templating/blob/master/gulpfile.js) for further information.
```bash
$ gulp
$ gulp prod
$ gulp watch
```

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
