<?php
/**
 * By default echos path for given route name.
 * 
 * Usage: <a href="<?php getPathFor('index', $locale, $baseUrl); ?>">Home</a>
 * 
 * @param string $routeName
 * @param string $locale
 * @param string $baseUrl
 * @param boolean $echo optional (default: true)
 * @param boolean $relative optional (default: true)
 */
function getPathFor($routeName, $locale, $baseUrl, $echo = TRUE, $relative = TRUE) {
    $routes = require 'routes.php';
    $uri = isset($routes[$routeName . '-' . $locale]) ? rtrim($baseUrl, '/') . $routes[$routeName . '-' . $locale]['path'] : '';
    
    if ($echo) {
        echo $uri;
    } else {
        return $uri;
    }
}

