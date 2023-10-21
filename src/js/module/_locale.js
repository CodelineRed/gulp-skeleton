'use strict';

// Example usage
// let cookieLayer = getTranslation('cookieLayer');
//
// if (cookieLayer === null) {
//     return;
// }

let _localeAlias = {
    de: 'de-de',
    en: 'en-us'
};

let _locale = {
    'de-de': {
        cookieLayer: {
            header: 'Cookies auf der Website verwendet!',
            message: 'Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten. Sie geben Einwilligung zu unseren Cookies, wenn Sie unsere Webseite weiterhin nutzen.',
            allow: 'Cookies zulassen',
            dismiss: 'Verstanden!',
            deny: 'Verweigern',
            link: 'Mehr erfahren',
            messageLink: 'Erfahren Sie mehr über Cookies',
            dismissLink: 'Cookie-Nachricht ablehnen',
            allowLink: 'Cookies zulassen',
            policy: 'Cookie-Richtlinie',
            href: '#datenschutz'
        }
    },
    'en-us': {
        cookieLayer: {
            header: 'Cookies used on the website!',
            message: 'This website uses cookies to ensure you get the best experience on our website. You agree to our cookies if you continue to use our website.',
            allow: 'Allow cookies',
            dismiss: 'Got it!',
            deny: 'Decline',
            link: 'Learn more',
            messageLink: 'Learn more about cookies',
            dismissLink: 'Dismiss cookie message',
            allowLink: 'Allow cookies',
            policy: 'Cookie Policy',
            href: '#privacypolicy'
        }
    }
};

/**
 *
 * @param full
 * @returns {string|null}
 */
function getLocale(full = true) {
    return (function($) {
        let locale = $('html').attr('lang');
        if (full) {
            return typeof locale === 'string' ? locale : null;
        } else {
            return typeof locale === 'string' ? locale.substring(0, 2) : null;
        }
    })(jQuery);
}

/**
 *
 * @param domain Name of the domain
 * @param localeOverride ISO 639-1 Standard
 * @returns {*|null}
 */
function getTranslation(domain, localeOverride = null) {
    let langAttr = typeof localeOverride === 'string' ? localeOverride : getLocale();

    if (typeof langAttr === 'string') {
        let locale = langAttr.toLowerCase();

        if (typeof _localeAlias[locale] === 'string') {
            locale = _localeAlias[locale];
        }

        if (typeof _locale[locale] !== 'undefined' && typeof _locale[locale][domain] !== 'undefined') {
            return _locale[locale][domain];
        }
    }

    return null;
}
