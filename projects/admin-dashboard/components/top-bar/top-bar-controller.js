define([], function(){
    var TopbarController = function($scope, $rootScope) {
        this._scope = $scope;
        this._rootScope = $rootScope;
    };

    /**
     * returns the name of the controller
     */
    TopbarController.getName = function() {
        return "TopbarController";
    };

    TopbarController.prototype = {
        
        openSettings: function() {
            this._rootScope.settingsOpen = !this._rootScope.settingsOpen;
        },

        closeSettings: function() {
            this._rootScope.settingsOpen = false;
        }
    };

    return TopbarController;
});
