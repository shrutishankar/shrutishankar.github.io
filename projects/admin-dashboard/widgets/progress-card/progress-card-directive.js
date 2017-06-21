define([
    "./progress-card-controller",
    "text!./progress-card-template.html"
], function(ProgressCardController, ProgressCardTemplate) {

    var ProgressCardDirective = function() {
        return {
            restrict: "AE",
            scope: {
                title: "@",
                subtitle: "@",
                progressValue: "@",
                progressColor: "@",
                iconClass: "@"
            },
            controller: ProgressCardController,
            controllerAs: ProgressCardController.getName(),
            bindToController: true,
            template: ProgressCardTemplate
        };
    };

    ProgressCardDirective.getName = function() {
        return "progressCard";
    };

    return ProgressCardDirective;
});
