/*global cssua bootstrap getCookie initCookieConsent initCssuaMonitor initFancyapps initImageLazyLoad initSlider initThemeSwitcher setCookie*/
'use strict';

// jQuery.noConflict();
(function($) {
    $(function() {
        $('html').removeClass('no-js');
        // initialize all tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')); // eslint-disable-line array-bracket-newline
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        initCookieConsent();
        initCssuaMonitor();
        initFancyapps();
        initImageLazyLoad();
        initSlider();
        initThemeSwitcher();
    });
})(jQuery);
