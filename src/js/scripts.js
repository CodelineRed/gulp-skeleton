/*global cssua bootstrap initCookieConsent initSlider initImageLazyLoad initCssuaMonitor*/
'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        // initialize all tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')); // eslint-disable-line array-bracket-newline
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        initCssuaMonitor();
        initCookieConsent();
        initImageLazyLoad();
        initSlider();
    });
})(jQuery);
