/*global Fancybox getLocale*/
'use strict';

/**
* Init Fancybox
*
* @returns {undefined}
*/
function initFancyapps() {
    (function($) {
        let lang = getLocale(false);
        let selector = '[data-fancybox], a[href$=".jpg"]';
        let options = {
            groupAll: true,
            idle: false
        };

        if (typeof Fancybox.l10n[lang] !== 'undefined') {
            options['l10n'] = Fancybox.l10n[lang];
        }

        Fancybox.bind(selector, options);
    })(jQuery);
}
