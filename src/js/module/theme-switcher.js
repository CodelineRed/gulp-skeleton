/*global getCookie setCookie*/
'use strict';

/**
* Init Theme Switcher
*
* @returns {undefined}
*/
function initThemeSwitcher() {
    (function($) {
        let theme = getCookie('theme');
        let themes = [
            'dark',
            'light'
        ];

        if (themes.includes(theme)) {
            $('html').attr('data-bs-theme', theme);
            $('.theme-switcher').removeClass('dark light');
            $('.theme-switcher').addClass(theme);
        }

        $('.theme-switcher').on('click', function(event) {
            $('html').attr('data-bs-theme', function(index, attr) {
                return attr === 'dark' ? 'light' : 'dark';
            });

            if ($(this).hasClass('dark')) {
                $(this).removeClass('dark');
                $(this).addClass('light');
                setCookie('theme', 'light', 365);
            } else {
                $(this).removeClass('light');
                $(this).addClass('dark');
                setCookie('theme', 'dark', 365);
            }
        });
    })(jQuery);
}
