'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        $('[data-toggle="tooltip"]').tooltip();
        
        $('.slider-brands').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000
        });
        
        var lazyLoad = new LazyLoad({
            //elements_selector: ".lazyload"
        });
        
        $.each(cssua.ua, function(key, value) {
            $('.cssua-monitor').append(key + ': ' + value + '<br>');
        });
        $('.cssua-monitor').append('html tag classes: ' + $('html').attr('class') + '<br>');
    });
})(jQuery);
