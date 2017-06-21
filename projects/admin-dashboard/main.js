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
        "highcharts": "./vendor/highcharts/highcharts",
        "text": "./vendor/text/text",

        "async": "./vendor/requirejs-plugins/src/async",
        "font": "./vendor/requirejs-plugins/src/font",
        "goog": "./vendor/requirejs-plugins/src/goog",
        "image": "./vendor/requirejs-plugins/src/image",
        "json": "./vendor/requirejs-plugins/src/json",
        "noext": "./vendor/requirejs-plugins/src/noext",
        "mdown": "./vendor/requirejs-plugins/src/mdown",
        "propertyParser" : "./vendor/requirejs-plugins/src/propertyParser",
        
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
        },

        "highcharts": {
            deps: [],
            exports: "highcharts"
        }

    },

    deps: [ "./app" ]
});