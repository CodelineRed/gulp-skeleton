<?php
if (is_readable(__DIR__ . '/../../gulpfile-config.dist.json') && is_writable(__DIR__ . '/../../')) {
    copy(__DIR__ . '/../../gulpfile-config.dist.json', __DIR__ . '/../../gulpfile-config.json');
}

