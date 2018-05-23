<?php
// available templates
$templates = array(
    'index' => 'base',
);
$templateKeys = array_keys($templates);

$template = isset($_GET['t']) && in_array($_GET['t'], $templateKeys) ? $_GET['t'] : $templateKeys[0];

include __DIR__ . '/../templates/layouts/' . $templates[$template] . '.phtml';