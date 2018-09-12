'use strict';

window.addEventListener('load', function() {
    window.cookieconsent.initialise({
        window: '<div role="dialog" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window w-100 {{classes}}">'
                + '<div class="container"><div class="row align-items-center">{{children}}</div></div></div>',
        elements: {
            messagelink: '<div class="col-12 col-sm-6 col-lg-8 pb-3 pb-sm-0"><span id="cookieconsent:desc" class="cc-message">{{message}} ' 
                    + '<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a></span></div>'
        },
        compliance: {
            info: '<div class="cc-compliance col-12 col-sm-6 col-lg-4">{{dismiss}}</div>',
            'opt-in':'<div class="cc-compliance cc-highlight col-12 col-sm-6 col-lg-4">{{dismiss}}{{allow}}</div>',
            'opt-out': '<div class="cc-compliance cc-highlight col-12 col-sm-6 col-lg-4">{{deny}}{{dismiss}}</div>'
        },
        palette: {
            popup: {
                background: '#252e39',
                text: '#ffffff'
            },
            button: {
                background: '#14a7d0',
                text: '#ffffff'
            }
        },
        theme: 'classic',
        type: 'info',
        content: {
            message: 'This website uses cookies to ensure you get the best experience on our website.',
            dismiss: 'Got it!',
            deny: 'Deny',
            link: 'Learn more',
            href: '#privacypolicy'
        },
        onInitialise: function(status) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type === 'opt-in' && didConsent) {
                // enable cookies
            }
            if (type === 'opt-out' && !didConsent) {
                // disable cookies
            }
        },
        onPopupOpen: function(){
            // do something
        },
        onPopupClose: function() {
            // do something
        },
        onStatusChange: function(status, chosenBefore) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type === 'opt-in' && didConsent) {
                // enable cookies
            }
            if (type ==='opt-out' && !didConsent) {
                // disable cookies
            }
            // user changed status - reload page
            //window.location.href = window.location.href;
        },
        onRevokeChoice: function() {
            var type = this.options.type;
            if (type === 'opt-in') {
                // disable cookies
            }
            if (type === 'opt-out') {
                // enable cookies
            }
        }
    });
});
