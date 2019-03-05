<?php
if (is_readable(__DIR__ . '/../../gulpfile-config.dist.json')) {
    copy(__DIR__ . '/../../gulpfile-config.dist.json', __DIR__ . '/../../gulpfile-config.json');
}

