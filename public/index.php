<?php
//error_reporting(E_ALL ^ E_NOTICE);
//ini_set('display_errors', FALSE);
//ini_set('display_startup_errors', TRUE);

// available routes
$routes = require __DIR__ . '/../src/php/routes.php';

$template = $routes['/']['template'];
$layout = $routes['/']['layout'];
$langCode = $routes['/']['lang'];
$lang = [];

// if 't' parameter isset and exists in $routes
if (isset($_GET['t']) && isset($routes['/' . $_GET['t'] . '/'])) {
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
            $template = $pathConfig['template'];
            $layout = $pathConfig['layout'];
            $langCode = $pathConfig['lang'];
            break;
        }
    }
}

// if lang file is readable
if (is_readable(__DIR__ . '/../src/lang/' . $langCode . '.php')) {
    $lang = require __DIR__ . '/../src/lang/' . $langCode . '.php';
}

include __DIR__ . '/../templates/layouts/' . $layout . '.phtml';