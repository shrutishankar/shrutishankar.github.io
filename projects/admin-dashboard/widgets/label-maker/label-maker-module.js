define([
    "angular",
    "./label-maker-directive"
], function(
    angular,
    LabelMakerDirective
) {
    var LabelMakerModule = angular.module("widgets.labelmaker", []);

    LabelMakerModule.directive(LabelMakerDirective.getName(), LabelMakerDirective);
    
    return LabelMakerModule;
});