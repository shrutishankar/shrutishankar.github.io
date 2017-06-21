define([
    "./icon-info-card-controller",
    "text!./icon-info-card-template.html"
], function(IconInfoCardController, IconInfoCardTemplate) {

    var IconInfoCardDirective = function() {
        return {
            restrict: "AE",
            scope: {
                title: "@",
                subtitle: "@",
                iconBgcolor: "@",
                iconColor: "@",
                iconClass: "@"
            },
            controller: IconInfoCardController,
            controllerAs: IconInfoCardController.getName(),
            bindToController: true,
            template: IconInfoCardTemplate
        };
    };

    IconInfoCardDirective.getName = function() {
        return "iconinfoCard";
    };

    return IconInfoCardDirective;
});
