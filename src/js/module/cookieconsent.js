window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        window: '<div role="dialog" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">'
                + '<div class="container"><div class="row align-items-center">{{children}}</div></div></div>',
        elements: {
            messagelink: '<div class="col-12 col-sm-6 col-lg-8 pb-3 pb-sm-0"><span id="cookieconsent:desc" class="cc-message">{{message}} ' 
                    + '<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a></span></div>'
        },
        compliance: {
            info: '<div class="cc-compliance col-12 col-sm-6 col-lg-4">{{dismiss}}</div>',
            "opt-in":'<div class="cc-compliance cc-highlight col-12 col-sm-6 col-lg-4">{{dismiss}}{{allow}}</div>',
            "opt-out": '<div class="cc-compliance cc-highlight col-12 col-sm-6 col-lg-4">{{deny}}{{dismiss}}</div>'
        },
        palette: {
            popup: {
                background: "#252e39",
                text: "#ffffff"
            },
            button: {
                background: "#14a7d0",
                text: "#ffffff"
            }
        },
        theme: "classic",
        type: "opt-out",
        content: {
            message: "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten.",
            dismiss: "Einverstanden",
            deny: "Ablehnen",
            link: "Mehr erfahren",
            href: "#datenschutz"
        },
        onInitialise: function (status) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type == 'opt-in' && didConsent) {
              // enable cookies
            }
            if (type == 'opt-out' && !didConsent) {
              // disable cookies
            }
        },
        onStatusChange: function(status, chosenBefore) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type == 'opt-in' && didConsent) {
              // enable cookies
            }
            if (type == 'opt-out' && !didConsent) {
              // disable cookies
            }
        },
        onRevokeChoice: function() {
            var type = this.options.type;
            if (type == 'opt-in') {
              // disable cookies
            }
            if (type == 'opt-out') {
              // enable cookies
            }
        }
    });
});
