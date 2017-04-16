define([
    "angular",
    "./top-bar-directive",
    "./top-bar-controller"
], function(
    angular, 
    TopbarDirective, 
    TopbarController
) {

    var TopbarModule = angular.module("components.topbar", []);
    TopbarModule.directive(TopbarDirective.getName(), TopbarDirective);

    return TopbarModule;
});