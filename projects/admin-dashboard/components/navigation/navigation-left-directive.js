define([
    "./navigation-controller",
    "text!./navigation-left-template.html"
], function(
    NavigationController,
    NavigationLeftTemplate
){ 
    var NavigationLeftDirective = function() {
         return {
            restrict: "AE",
            scope: {},
            controller: NavigationController,
            //controller: [ "$scope", "$location", function(scope, location) { return new NavigationController(scope, location); }],
            controllerAs: NavigationController.getName(),
            bindToController: true,
            template: NavigationLeftTemplate
        };
    };

    NavigationLeftDirective.getName = function() {
        return "navigationLeft";
    }

    return NavigationLeftDirective;
});