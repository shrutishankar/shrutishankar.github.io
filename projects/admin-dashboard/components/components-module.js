define([
    "angular",
    "./multi-select/multi-select-module",
    "./navigation/navigation-module",
    "./settings/settings-module",
    "./top-bar/top-bar-module"
], function(
    angular, 
    MultiselectModule,
    NavigationModule,
    SettingsModule,
    TopbarModule
) {

    var ComponentsModule = angular.module("components", [
        MultiselectModule.name,
        NavigationModule.name,
        SettingsModule.name,
        TopbarModule.name
    ]);

    return ComponentsModule;
});