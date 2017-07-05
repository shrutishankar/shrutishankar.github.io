requirejs.config({
    baseUrl: "src",
    paths: {
        "angular": "../bower_components/angular/angular.min",
        "angularAnimate": "../bower_components/angular-animate/angular-animate.min",
        "angularAria": "../bower_components/angular-aria/angular-aria.min",
        "angularMessages": "../bower_components/angular-messages/angular-messages.min",
        "angularMaterial": "../bower_components/angular-material/angular-material.min"
    },
    shim: {
        "angular" : {
            exports: "angular"
        },

        "angularAria": {
            deps: ["angular"],
            exports: "ngAria"
        },

        "angularAnimate": {
            deps: ["angular"],
            exports: "ngAnimate"
        },

        "angularMessages": {
            deps: ["angular"],
            exports: "ngMessages"
        },

        "angularMaterial": {
            deps: ["angular", "angularAria", "angularMessages", "angularAnimate"],
            exports: "ngMaterial"
        },
    },

    deps: [ "./app" ]
});
