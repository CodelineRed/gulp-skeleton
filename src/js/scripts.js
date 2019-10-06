/*global cssua initCookieConsent initSlider initImageLazyLoad initCssuaMonitor*/
'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        $('[data-toggle="tooltip"]').tooltip();
        
        initCssuaMonitor();
        initCookieConsent();
        initImageLazyLoad();
        initSlider();
    });
})(jQuery);
