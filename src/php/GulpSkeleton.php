<?php

class GulpSkeleton {
    
    private $baseUrl;
    private $cookieLocale;
    private $cookiesAllowed;
    private $currentUrl;
    private $layout;
    private $locale;
    private $routeName;
    private $routes;
    private $template;
    private $version;

    /**
     * @param string $defaultLocale
     * @param array $routes
     */
    function __construct($defaultLocale, $routes) {
        $this->setCookiesAllowed(isset($_COOKIE['cookieconsent_status']) && in_array($_COOKIE['cookieconsent_status'], array('allow', 'dismiss')));
        $this->setBaseUrl(($_SERVER['SERVER_PORT'] == '80' ? 'http' : 'https') . '://' . $_SERVER['SERVER_NAME'] . str_replace('index.php', '', $_SERVER['PHP_SELF']));
        $this->setCurrentUrl(($_SERVER['SERVER_PORT'] == '80' ? 'http' : 'https') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
        $this->setCookieLocale(isset($_COOKIE['current_locale']) && in_array(isset($_COOKIE['current_locale']), array('de_de', 'en_us')) ? $_COOKIE['current_locale'] : $defaultLocale);
        $this->setTemplate($routes['404-' . $this->getCookieLocale()]['template']);
        $this->setLayout($routes['404-' . $this->getCookieLocale()]['layout']);
        $this->setLocale($routes['404-' . $this->getCookieLocale()]['locale']);
        $this->setRouteName('404');
        $this->setRoutes($routes);
        $this->setVersionFromPackage();
    }

    /**
     * @return string
     */
    public function getBaseUrl() {
        return $this->baseUrl;
    }

    /**
     * @param string $baseUrl
     * @return $this
     */
    public function setBaseUrl($baseUrl) {
        $this->baseUrl = $baseUrl;
        
        return $this;
    }

    /**
     * @return string
     */
    public function getCookieLocale() {
        return $this->cookieLocale;
    }

    /**
     * @param string $cookieLocale
     * @return $this
     */
    public function setCookieLocale($cookieLocale) {
        $this->cookieLocale = $cookieLocale;
        
        return $this;
    }

    /**
     * @return bool
     */
    public function getCookiesAllowed() {
        return $this->cookiesAllowed;
    }

    /**
     * @param bool $cookiesAllowed
     * @return $this
     */
    public function setCookiesAllowed($cookiesAllowed) {
        $this->cookiesAllowed = $cookiesAllowed;
        
        return $this;
    }

    /**
     * @return string
     */
    public function getCurrentUrl() {
        return $this->currentUrl;
    }

    /**
     * @param string $currentUrl
     * @return $this
     */
    public function setCurrentUrl($currentUrl) {
        $this->currentUrl = $currentUrl;
        
        return $this;
    }

    /**
     * @return string
     */
    public function getLayout() {
        return $this->layout;
    }

    /**
     * @param string $layout
     * @return $this
     */
    public function setLayout($layout) {
        $this->layout = $layout;
        
        return $this;
    }

    /**
     * @return string
     */
    public function getLocale() {
        return $this->locale;
    }

    /**
     * @param string $locale
     * @return $this
     */
    public function setLocale($locale) {
        $this->locale = $locale;
        
        return $this;
    }

    /**
     * @return string
     */
    public function getRouteName() {
        return $this->routeName;
    }

    /**
     * @param string $routeName
     * @return $this
     */
    public function setRouteName($routeName) {
        $this->routeName = substr($routeName, 0, strrpos($routeName, '-'));
        
        return $this;
    }

    /**
     * @return array
     */
    public function getRoutes() {
        return $this->routes;
    }

    /**
     * @param array $routes
     * @return $this
     */
    public function setRoutes($routes) {
        $this->routes = $routes;
        
        return $this;
    }

    /**
     * @return string
     */
    public function getTemplate() {
        return $this->template;
    }

    /**
     * @param string $template
     * @return $this
     */
    public function setTemplate($template) {
        $this->template = $template;
        
        return $this;
    }

    /**
     * @return string
     */
    public function getVersion() {
        return $this->version;
    }

    /**
     * @param string $version
     * @return $this
     */
    public function setVersion($version) {
        $this->version = $version;
        
        return $this;
    }

    /**
     * Sets version by version in package.json
     * 
     * @return $this
     */
    public function setVersionFromPackage() {
        if (is_readable(__DIR__ . '/../../package.json')) {
            $package = json_decode(file_get_contents(__DIR__ . '/../../package.json'), true);
            $this->version = $package['version'];
        }
        
        return $this;
    }

    /**
     * By default echos path for given route name.
     * 
     * Usage: <a href="<?php $gs->getPathFor('index'); ?>">Home</a>
     * 
     * @param string $routeName
     * @param string $locale optional (default: null)
     * @param string $baseUrl optional (default: null)
     * @param boolean $echo optional (default: true)
     * @param boolean $relative optional (default: true)
     * @return string|void
    */
    public function getPathFor($routeName, $locale = NULL, $baseUrl = NULL, $echo = TRUE, $relative = TRUE) {
        $locale = is_string($locale) ? $locale : $this->getLocale();
        $baseUrl = is_string($baseUrl) ? $baseUrl : $this->getBaseUrl();
        $routes = $this->getRoutes();
        $uri = isset($routes[$routeName . '-' . $locale]) ? rtrim($baseUrl, '/') . $routes[$routeName . '-' . $locale]['path'] : '';
        
        if ($relative) {
            $uri = str_replace($baseUrl, '', $uri);
        }
        
        if ($echo) {
            echo $uri;
        } else {
            return $uri;
        }
    }
}
