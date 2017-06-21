define([
    "./view-details-card-controller",
    "text!./view-details-card-template.html"
], function(ViewDetailsCardController, ViewDetailsCardTemplate) {

    var ViewDetailsCardDirective = function() {
        return {
            restrict: "AE",
            scope: {
                title: "@",
                subtitle: "@",
                /*link: "@",*/
                bgColor: "@",
                iconClass: "@"
            },
            controller: ViewDetailsCardController,
            controllerAs: ViewDetailsCardController.getName(),
            bindToController: true,
            template: ViewDetailsCardTemplate
        };
    };

    ViewDetailsCardDirective.getName = function() {
        return "viewdetailsCard";
    };

    return ViewDetailsCardDirective;
});
