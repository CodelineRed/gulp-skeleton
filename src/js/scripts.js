// jQuery.noConflict();
(function($) {
    $(document).ready(function(){
        $('html').removeClass('no-js');
        $('[data-toggle="tooltip"]').tooltip();
        $('.slider-brands').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000
        });
        new LazyLoad({
            elements_selector: ".lazyload"
        });
    });
})(jQuery);