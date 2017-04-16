define([
    "angular",
    "./navigation-left-directive",
    "./navigation-right-directive"
], function(angular, NavigationLeftDirective, NavigationRightDirective) { 
    
    var NavigationModule = angular.module("components.navigation", []);
    NavigationModule.directive(NavigationLeftDirective.getName(), NavigationLeftDirective);
    NavigationModule.directive(NavigationRightDirective.getName(), NavigationRightDirective);
    
    return NavigationModule;
});