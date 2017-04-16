define([
    "./settings-controller",
    "text!./settings-template.html"
], function(
    SettingsController, 
    SettingsTemplate
) {

    var SettingsDirective = function() {
        return {
            restrict: "AE",
            controller: SettingsController,
            controllerAs: SettingsController.getName(),
            bindToController: true,
            template: SettingsTemplate
        };
    };

    SettingsDirective.getName = function() {
        return "settings";
    };

    return SettingsDirective;
});
