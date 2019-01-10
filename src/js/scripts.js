'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        $('[data-toggle="tooltip"]').tooltip();
        
        $('.slider-brands').slick({
            dots: true,
            autoplay: true,
            mobileFirst: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    // window > 575
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    // window > 991
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
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
