requirejs.config({
    baseUrl: ".",
    paths: {
        "angular": "./vendor/angular/angular.min",
        "angularAria": "./vendor/angular-aria/angular-aria.min",
        "angularAnimate": "./vendor/angular-animate/angular-animate.min",
        "angularBootstrap": "./vendor/angular-bootstrap/ui-bootstrap-tpls",
        "angularMaterial": "./vendor/angular-material/angular-material.min",
        "angularRoute": "./vendor/angular-route/angular-route.min",
        "angularMessages": "./vendor/angular-messages/angular-messages.min",
        "text": "./vendor/text/text"
    },
    shim: {
        "angular" : {
            exports: "angular"
        },

        "angularAria": {
            deps: [ "angular"],
            exports: "ngAria"
        },

        "angularAnimate" : {
            deps: [ "angular" ],
            exports: "ngAnimate"
        },

        "angularBootstrap" : {
            deps: [ "angular" ],
            exports: "ngBootstrap"
        },

        "angularMessages" : {
            deps: [ "angular" ],
            exports: "angularMessages"
        },

        "angularMaterial" : {
            deps: [ "angular", "angularAria", "angularMessages" ],
            exports: "ngMaterial"
        },

        "angularRoute" : {
            deps: [ "angular" ],
            exports: "ngRoute"
        }

    },

    deps: [ "./app" ]
});