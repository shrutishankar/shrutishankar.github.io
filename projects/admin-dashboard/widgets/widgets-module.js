define([
    "angular",
    "./progress-card/progress-card-module",
    "./icon-info-card/icon-info-card-module",
    "./label-maker/label-maker-module",
    "./view-details-card/view-details-card-module",
    "./static-info-card/static-info-card-module"
], function(
    angular,
    ProgressCardModule,
    IconInfoCardModule,
    LabelMakerModule,
    ViewDetailsCardModule,
    StaticInfoCardModule

) {
    var WidgetsModule = angular.module("widgets", [
        ProgressCardModule.name,
        IconInfoCardModule.name,
        LabelMakerModule.name,
        ViewDetailsCardModule.name,
        StaticInfoCardModule.name
    ]);
    
    return WidgetsModule;
});