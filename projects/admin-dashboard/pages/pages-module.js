define([
    "angular",
    "./elements/elements-controller",
    "./forms/forms-controller",
    "./home/home-controller",
    "./pages/pages-controller",
    "./widgets/widgets-controller"
], function(
    angular,
    ElementsController,
    FormsController,
    HomeController,
    PagesController,
    WidgetsController
) {

    var PagesModule = angular.module("pages", []);
    PagesModule.controller(ElementsController.getName(), ElementsController);
    PagesModule.controller(FormsController.getName(), FormsController);
    PagesModule.controller(HomeController.getName(), HomeController);
    PagesModule.controller(PagesController.getName(), PagesController);
    PagesModule.controller(WidgetsController.getName(), WidgetsController);

    return PagesModule;
});