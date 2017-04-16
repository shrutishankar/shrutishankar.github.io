define([
    "angular",
    "./routes",
    "./pages/pages-module",
    "./components/components-module",
    
    "angularAria",
    "angularAnimate",
    "angularMessages",
    "angularBootstrap",
    "angularMaterial",
    "angularRoute"
], function(
    angular, 
    routes, 
    PagesModule, 
    ComponentsModule) {

    var app = angular.module('adminDashboard', [
       "ui.bootstrap",
       "ngRoute",
       "ngMessages",
       "ngAnimate",
       "ngMaterial",
       
       PagesModule.name,
       ComponentsModule.name
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        for (var idx = 0; idx < routes.length; idx++) {
            var route = routes[idx];
            if (route.url) {
                $routeProvider.when(route.url, {
                    templateUrl: route.templateUrl,
                    controller: route.controller,
                    controllerAs: route.controllerAs ? route.controllerAs : route.controller
                });
            }

            if (route.childRoutes && route.childRoutes.length > 0) {
                for ( var cdx = 0; cdx < route.childRoutes.length; cdx++) {
                    var childRoute = route.childRoutes[cdx];
                    $routeProvider.when(childRoute.url, {
                        templateUrl: childRoute.templateUrl,
                        controller: childRoute.controller,
                        controllerAs: childRoute.controllerAs ? childRoute.controllerAs : childRoute.controller
                    });
                }
            }

            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    }]);


    angular.element(document).ready(function() {
        angular.bootstrap(document, [ app.name ]);
    });
});



