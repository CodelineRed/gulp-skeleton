/*global cssua initCookieConsent initSlider initImageLazyLoad*/
'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        $('[data-toggle="tooltip"]').tooltip();
        
        $.each(cssua.ua, function(key, value) {
            $('.cssua-monitor').append(key + ': ' + value + '<br>');
        });
        $('.cssua-monitor').append('html tag classes: ' + $('html').attr('class') + '<br>');
        
        initCookieConsent();
        initImageLazyLoad();
        initSlider();
    });
})(jQuery);
