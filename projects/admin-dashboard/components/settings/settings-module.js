define([
    "angular",
    "./settings-directive",
    "./settings-controller",
    "./themes"
], function(
    angular, 
    SettingsDirective, 
    SettingsController,
    Themes
) {

    var SettingsModule = angular.module("components.settings", [ "ngMaterial" ]);
    SettingsModule.directive(SettingsDirective.getName(), SettingsDirective);

    SettingsModule.config(function($mdThemingProvider) {
        for (key in Themes) {
            if (Themes.hasOwnProperty(key)) {
                var theme = Themes[key];
                $mdThemingProvider.theme(theme.name).primaryPalette(theme.primaryColor);
                if (theme.accentColor) {
                    $mdThemingProvider.theme(theme.name).accentPalette(theme.accentColor);
                }
            }
        }

        // This is the absolutely vital part, without this, changes will not cascade down through the DOM.
        $mdThemingProvider.alwaysWatchTheme(true);
    });
    return SettingsModule;
});