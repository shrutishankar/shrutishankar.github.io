define([
    "angular",
    "./view-details-card-directive"
], function(
    angular,
    ViewDetailsCardDirective
) {
    var ViewDetailsCardModule = angular.module("widgets.viewdetailscard", []);

    ViewDetailsCardModule.directive(ViewDetailsCardDirective.getName(), ViewDetailsCardDirective);
    
    return ViewDetailsCardModule;
});