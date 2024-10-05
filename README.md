# Gulp Skeleton - CodelineRed

[**Demo page**](https://gulp.codelinered.net)

## Table of contents
- [Included Third Party Code](#included)
- Install Guides
    - [Install Production Build (Recommended)](#install-production-build-recommended)
    - [Install Main/ Develop Build](#install-main-develop-build)
    - [Install with Docker (optional)](#install-with-docker-optional)
- [Project Commands](#project-commands)
- [`gulpfile-config.js`](#gulpfile-configjs)
- [Localization](#localization)
- [Links](#links)

## Included
- [jQuery 3](http://jquery.com)
- [Bootstrap 5](https://getbootstrap.com)
- [Font Awesome 6](https://fontawesome.com)
- [Slick Carousel 1](http://kenwheeler.github.io/slick/)
- [LazyLoad 19](https://www.andreaverlicchi.eu/vanilla-lazyload/)
- [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
- [Cookieconsent 3](https://github.com/insites/cookieconsent)
- [Fancyapps 5](https://fancyapps.com/)

## Install Production Build (Recommended)
### Required
- PHP >= 5.5

Open console on your OS and navigate to the place where you want to install the project.

### With Composer
```shell
php composer create-project --ignore-platform-reqs --no-dev codelinered/gulp-skeleton gulp-skeleton "dev-production" && cd gulp-skeleton
```

### With GIT
```shell
git clone https://github.com/CodelineRed/gulp-skeleton.git && cd gulp-skeleton && git checkout production
```

### With ZIP

Unix
```shell
wget -O gs-prod.zip https://github.com/CodelineRed/gulp-skeleton/archive/production.zip && unzip gs-prod.zip && cd gulp-skeleton-production
```

Windows 10+
```shell
curl -L -o gs-prod.zip https://github.com/CodelineRed/gulp-skeleton/archive/production.zip && tar -xf gs-prod.zip && cd gulp-skeleton-production
```

If you need PHP, you have to go to [Install with Docker](#install-with-docker-optional).

## Install Main/ Develop Build
### Required
- [Node.js](http://nodejs.org/en/download/) >= 18.17
- [npm](http://www.npmjs.com/get-npm) `npm i npm@latest -g`
- [gulp-cli](https://www.npmjs.com/package/gulp-cli) `npm i gulp-cli@latest -g`

Open console on your OS and navigate to the place where you want to install the project.

### With Composer
```shell
php composer create-project --ignore-platform-reqs codelinered/gulp-skeleton && cd gulp-skeleton && npm i && gulp build && gulp watch
```

### With GIT
```shell
git clone https://github.com/CodelineRed/gulp-skeleton.git && cd gulp-skeleton && git checkout main && npm i && gulp build && gulp watch
```

### With ZIP

Unix
```shell
wget -O gs-main.zip https://github.com/CodelineRed/gulp-skeleton/archive/main.zip && unzip gs-main.zip && cd gulp-skeleton-main && npm i && gulp build && gulp watch
```

Windows 10+
```shell
curl -L -o gs-main.zip https://github.com/CodelineRed/gulp-skeleton/archive/main.zip && tar -xf gs-main.zip && cd gulp-skeleton-main && npm i && gulp build && gulp watch
```

Open [localhost:3000](http://localhost:3000) for Website.

## Install with Docker (optional)
### Required
- [Docker](https://www.docker.com/)

Open console on your OS and navigate to the place where you want to install the project.

Unix
- Start Docker `systemctl docker start`
- Copy and run commands below
```shell
docker run --rm --interactive --tty --volume $PWD:/app composer create-project --ignore-platform-reqs --no-dev codelinered/gulp-skeleton gulp-skeleton "dev-production" && cd gulp-skeleton && docker-compose up -d && xdg-open http://localhost:7701
```

Windows 10+
- Start Docker Desktop `"C:\Program Files\Docker\Docker Desktop.exe"`
- Copy and run commands below
```shell
docker run --rm --interactive --tty --volume %cd%:/app composer create-project --ignore-platform-reqs --no-dev codelinered/gulp-skeleton gulp-skeleton "dev-production" && cd gulp-skeleton && docker-compose up -d && start http://localhost:7701
```

Open [localhost:7701](http://localhost:7701) for Website.

## Project Commands
|               | Description                                                                                                                              |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| gulp          | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync) (only available with Docker)                             |
| gulp build    | executes following tasks: cleanUp, favicon, font, img, js, jsLint, scss, scssLint, svg                                                   |
| gulp lint     | executes following tasks: jsLint, scssLint                                                                                               |
| gulp cleanUp  | clean up public folder                                                                                                                   |
| gulp favicon  | generate favicons                                                                                                                        |
| gulp font     | copy font files                                                                                                                          |
| gulp img      | copy and compress images                                                                                                                 |
| gulp js       | uglify, minify and concat js files                                                                                                       |
| gulp jsLint   | checks js follows [lint rules](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/js-lint.js)                                |
| gulp scss     | compile, minify and concat scss files                                                                                                    |
| gulp scssLint | checks scss follows [lint rules](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/scss-lint.js)                            |
| gulp thankYou | a small thank for you                                                                                                                    |
| gulp svg      | copy and compress svg files                                                                                                              |
| gulp watch    | watch favicon, font, img, js, scss and svg files                                                                                         |

## [`gulpfile-config.js`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/app/gulpfile-config.dist.js)
|                     | Description                                                                                                                        |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------|
| browserSyncConfig   | Required - Defines which config is used for [BrowserSync](https://www.npmjs.com/package/browser-sync) (default: browserSyncDocker) |
| sourcePath          | Required - Path to raw files (default: src/)                                                                                       |
| publicPath          | Required - Path to transpiled files (default: public/)                                                                             |
| systemPath          | Optional - Alternative Path to transpiled files on CMS, ECS, PHP Framework, ... (default: path/to/system/)                         |
| env                 | Required - Environment dev, test or prod (default: prod)                                                                            |

## Localization
- [`src/locale/`](https://github.com/CodelineRed/gulp-skeleton/blob/main/src/locale/)

## Links
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
