<?php
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

// if lang file is readable
if (is_readable(__DIR__ . '/../src/lang/' . $langCode . '.php')) {
    $lang = require __DIR__ . '/../src/lang/' . $langCode . '.php';
}

include __DIR__ . '/../templates/layouts/' . $layout . '.phtml';