define([
    "angular",
    "./icon-info-card-directive"
], function(
    angular,
    IconInfoCardDirective
) {
    var IconInfoCardModule = angular.module("widgets.iconinfocard", []);

    IconInfoCardModule.directive(IconInfoCardDirective.getName(), IconInfoCardDirective);
    
    return IconInfoCardModule;
});