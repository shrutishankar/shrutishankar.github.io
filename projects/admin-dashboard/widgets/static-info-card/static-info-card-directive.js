define([
    "./static-info-card-controller",
    "text!./static-info-card-template.html"
], function(StaticInfoCardController, StaticInfoCardTemplate) {

    var StaticInfoCardDirective = function() {
        return {
            restrict: "AE",
            scope: {
                title: "@",
                subtitle: "@",
                bgcolor: "@",
                Color: "@",
                iconClass: "@"
            },
            controller: StaticInfoCardController,
            controllerAs: StaticInfoCardController.getName(),
            bindToController: true,
            template: StaticInfoCardTemplate
        };
    };

    StaticInfoCardDirective.getName = function() {
        return "staticinfoCard";
    };

    return StaticInfoCardDirective;
});
