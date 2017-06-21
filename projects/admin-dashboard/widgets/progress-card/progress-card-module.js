define([
    "angular",
    "./progress-card-directive"
], function(
    angular,
    ProgressCardDirective
) {
    var ProgressCardModule = angular.module("widgets.progresscard", []);

    ProgressCardModule.directive(ProgressCardDirective.getName(), ProgressCardDirective);
    
    return ProgressCardModule;
});