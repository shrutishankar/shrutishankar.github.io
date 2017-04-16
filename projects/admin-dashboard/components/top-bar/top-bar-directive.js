define([
    "./top-bar-controller",
    "text!./top-bar-template.html"
], function(
    TopbarController, 
    TopbarTemplate
) {

    var TopbarDirective = function() {
        return {
            restrict: "AE",
            controller: TopbarController,
            controllerAs: TopbarController.getName(),
            bindToController: true,
            template: TopbarTemplate
        };
    };

    TopbarDirective.getName = function() {
        return "topBar";
    };

    return TopbarDirective;
});
