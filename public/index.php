<?php
session_start();
//error_reporting(E_ALL ^ E_NOTICE);
//ini_set('display_errors', TRUE);
//ini_set('display_startup_errors', TRUE);

// available routes
$routes = require __DIR__ . '/../src/php/routes.php';
$defaultLang = 'en';
$currentLang = isset($_COOKIE['current_lang']) && in_array(isset($_COOKIE['current_lang']), ['de', 'en']) ? '/' . $_COOKIE['current_lang'] : '';

if ($currentLang === '/' . $defaultLang) {
    $currentLang = '';
}

http_response_code(404);
$template = $routes[$currentLang . '/404/']['template'];
$layout = $routes[$currentLang . '/404/']['layout'];
$langCode = $routes[$currentLang . '/404/']['lang'];
$lang = [];

// if 't' parameter isset and exists in $routes (will be removed in 5.0)
if (isset($_GET['t']) && isset($routes['/' . $_GET['t'] . '/'])) {
    http_response_code(200);
    $template = $routes['/' . $_GET['t'] . '/']['template'];
    $layout = $routes['/' . $_GET['t'] . '/']['layout'];
    $langCode = $routes['/' . $_GET['t'] . '/']['lang'];
} else {
    // handle speaking url
    $baseDir = str_replace('index.php', '', $_SERVER['PHP_SELF']);
    $requestUri = str_replace($baseDir, '/', $_SERVER['REQUEST_URI']);

    foreach ($routes as $path => $pathConfig) {
        // if requested url is available
        if ($requestUri === $path) {
            http_response_code(200);
            $template = $pathConfig['template'];
            $layout = $pathConfig['layout'];
            $langCode = $pathConfig['lang'];
            setcookie('current_lang', $langCode);
            break;
        }
    }
}

// if lang file is readable
if (is_readable(__DIR__ . '/../src/lang/' . $langCode . '.php')) {
    $lang = require __DIR__ . '/../src/lang/' . $langCode . '.php';
}

include __DIR__ . '/../templates/layouts/' . $layout . '.phtml';