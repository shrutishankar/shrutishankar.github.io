define([
    "angular",
    "./static-info-card-directive"
], function(
    angular,
    StaticInfoCardDirective
) {
    var StaticInfoCardModule = angular.module("widgets.staticinfocard", []);

    StaticInfoCardModule.directive(StaticInfoCardDirective.getName(), StaticInfoCardDirective);
    
    return StaticInfoCardModule;
});