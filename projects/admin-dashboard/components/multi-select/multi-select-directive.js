define([
    "./multi-select-controller",
    "text!./multi-select-template.html"
], function(MultiselectController, MultiselectTemplate) {

    var MultiselectDirective = function() {
        return {
            restrict: "AE",
            scope: {
                buttonLabel: "@",       //[required, the label on the dropdown button]
                options: "=",           //[required, an array of options]
                selectedOptions: "="    //[optional]
            },
            controller: MultiselectController,
            controllerAs: MultiselectController.getName(),
            bindToController: true,
            template: MultiselectTemplate
        };
    };

    MultiselectDirective.getName = function() {
        return "multiSelect";
    };

    return MultiselectDirective;
});
