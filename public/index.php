<?php
session_start();
error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

// available routes
$routes = require __DIR__ . '/../src/php/routes.php';
require __DIR__ . '/../src/php/functions.php';
$defaultLang = 'en_us';
$cookieLocale = isset($_COOKIE['current_locale']) && in_array(isset($_COOKIE['current_locale']), ['de_de', 'en_us']) ? $_COOKIE['current_locale'] : $defaultLang;

http_response_code(404);
$template = $routes['404-' . $cookieLocale]['template'];
$layout = $routes['404-' . $cookieLocale]['layout'];
$locale = $routes['404-' . $cookieLocale]['locale'];
$routeName = '404';
$lang = [];

// handle speaking url
$baseDir = str_replace('index.php', '', $_SERVER['PHP_SELF']);
$requestUri = str_replace($baseDir, '/', $_SERVER['REQUEST_URI']);

foreach ($routes as $routeName => $route) {
    // if requested path is available
    if ($requestUri === $route['path']) {
        http_response_code(isset($route['response-code']) ? $route['response-code'] : 200);
        $template = $route['template'];
        $layout = $route['layout'];
        $locale = $route['locale'];
        $routeName = substr($routeName, 0, strrpos($routeName, '-'));
        setcookie('current_locale', $locale, time()+60*60*24*365, '/');
        break;
    }
}

// if lang file is readable
if (is_readable(__DIR__ . '/../src/locale/' . $locale . '.php')) {
    $lang = require __DIR__ . '/../src/locale/' . $locale . '.php';
}

include __DIR__ . '/../templates/layouts/' . $layout . '.phtml';