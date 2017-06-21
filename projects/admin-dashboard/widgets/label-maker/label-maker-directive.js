define([
    "./label-maker-controller",
    "text!./label-maker-template.html"
], function(LabelMakerController, LabelMakerTemplate) {

    var LabelMakerDirective = function() {
        return {
            restrict: "AE",
            scope: {
                title: "@",
                subtitle: "@",
                bgColor: "@",
                fontColor:"@",
                icon:"@"
            },
            controller: LabelMakerController,
            controllerAs: LabelMakerController.getName(),
            bindToController: true,
            template: LabelMakerTemplate
        };
    };

    LabelMakerDirective.getName = function() {
        return "labelMaker";
    };

    return LabelMakerDirective;
});