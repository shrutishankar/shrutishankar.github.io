define([
    "angular",
    "../../routes"
], function(
    angular,
    routes
){ 

    var NavigationController = function($scope, $location, $rootScope, $routeParams) {
        this._scope = $scope;
        this._rootScope = $rootScope;
        this._location = $location;
        this._routeParams = $routeParams;

        this._routes = angular.copy(routes);
        this.init();
    };

    NavigationController.getName = function() {
        return "NavigationController";
    }

    NavigationController.prototype = {

        init: function() {
            this._routes.forEach(function(route) {
                var current = window.location.hash;
                if (this.isCurrentRoute(route)) {
                    this.toggleRoute(route);
                    return;
                } else {
                    if (route.childRoutes) {
                        route.childRoutes.forEach(function(childRoute) {
                            if (this.isCurrentRoute(childRoute)) {
                                this.toggleRoute(route);
                                return;
                            }
                        }.bind(this));
                    }
                }

            }.bind(this));
        },

        isCurrentRoute: function(route) {
            return "#!" + route.url === window.location.hash;
        },

        getRoutes: function() {
            return this._routes;
        },

        routeClicked: function(route) {
            if (route.url) {
                this._location.path(route.url);
            }
            this.toggleRoute(route);
        },

        toggleRoute: function(route) {
            if (route.childRoutes && route.childRoutes.length > 0) {
                this._routes.forEach(function(r) {
                    if (r === route) {
                        r.open = !r.open;
                    } else {
                        r.open = false;
                    }
                });
            }
        },

        closeSettings: function() {
            this._rootScope.settingsOpen = false;
        }
    };

    return NavigationController;
});