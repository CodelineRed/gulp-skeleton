<?php

class GulpSkeleton {
    
    private $cookiesAllowed;
    private $baseUrl;
    private $currentUrl;
    private $template;
    private $layout;
    private $locale;
    private $routeName;
    private $routes;
    private $cookieLocale;

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
    }

    /**
     * @return string
     */
    public function getBaseUrl() {
        return $this->baseUrl;
    }

    /**
     * @return bool
     */
    public function getCookiesAllowed() {
        return $this->cookiesAllowed;
    }

    /**
     * @return string
     */
    public function getCookieLocale() {
        return $this->cookieLocale;
    }

    /**
     * @return string
     */
    public function getCurrentUrl() {
        return $this->currentUrl;
    }

    /**
     * @return string
     */
    public function getLayout() {
        return $this->layout;
    }

    /**
     * @return string
     */
    public function getLocale() {
        return $this->locale;
    }

    /**
     * @return string
     */
    public function getTemplate() {
        return $this->template;
    }

    /**
     * @return string
     */
    public function getRouteName() {
        return $this->routeName;
    }

    /**
     * @return array
     */
    public function getRoutes() {
        return $this->routes;
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
     * @param bool $cookiesAllowed
     * @return $this
     */
    public function setCookiesAllowed($cookiesAllowed) {
        $this->cookiesAllowed = $cookiesAllowed;
        
        return $this;
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
     * @param string $currentUrl
     * @return $this
     */
    public function setCurrentUrl($currentUrl) {
        $this->currentUrl = $currentUrl;
        
        return $this;
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
     * @param string $locale
     * @return $this
     */
    public function setLocale($locale) {
        $this->locale = $locale;
        
        return $this;
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
     * @param string $routeName
     * @return $this
     */
    public function setRouteName($routeName) {
        $this->routeName = substr($routeName, 0, strrpos($routeName, '-'));
        
        return $this;
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
    * By default echos path for given route name.
    * 
    * Usage: <a href="<?php $gs->getPathFor('index'); ?>">Home</a>
    * 
    * @param string $routeName
    * @param string $locale optional (default: null)
    * @param string $baseUrl optional (default: null)
    * @param boolean $echo optional (default: true)
    * @param boolean $relative optional (default: true)
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
