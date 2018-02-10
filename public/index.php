<?php
// available templates
$templates = array(
    'index',
);

$template = isset($_GET['t']) && in_array($_GET['t'], $templates) ? $_GET['t'] : 'index';

include __DIR__ . '/../templates/layouts/base.phtml';