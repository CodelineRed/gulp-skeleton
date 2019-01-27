<?php
//error_reporting(E_ALL ^ E_NOTICE);
//ini_set('display_errors', FALSE);
//ini_set('display_startup_errors', TRUE);

// available url paths
$paths = [
    '/' => [
        'layout' => 'base',
        'template' => 'index',
        'lang' => 'en',
    ],
    '/de/' => [
        'layout' => 'base',
        'template' => 'index',
        'lang' => 'de',
    ],
];

$template = $paths['/']['template'];
$layout = $paths['/']['layout'];
$langCode = $paths['/']['lang'];
$lang = [];

// if 't' parameter isset and exists in $paths
if (isset($_GET['t']) && isset($paths['/' . $_GET['t'] . '/'])) {
    $template = $paths['/' . $_GET['t'] . '/']['template'];
    $layout = $paths['/' . $_GET['t'] . '/']['layout'];
    $langCode = $paths['/' . $_GET['t'] . '/']['lang'];
} else {
    // handle speaking url
    $baseDir = str_replace('index.php', '', $_SERVER['PHP_SELF']);
    $requestUri = str_replace($baseDir, '/', $_SERVER['REQUEST_URI']);

    foreach ($paths as $path => $pathConfig) {
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