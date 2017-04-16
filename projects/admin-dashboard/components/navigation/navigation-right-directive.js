define([
    "./navigation-controller",
    "text!./navigation-right-template.html"
], function(
    NavigationController,
    NavigationRightTemplate
){ 
    var NavigationRightDirective = function() {
         return {
            restrict: "AE",
            scope: {},
            controller: NavigationController,
            //controller: [ "$scope", "$location", function(scope, location) { return new NavigationController(scope, location); }],
            controllerAs: NavigationController.getName(),
            bindToController: true,
            template: NavigationRightTemplate
        };
    };

    NavigationRightDirective.getName = function() {
        return "navigationRight";
    }

    return NavigationRightDirective;
});