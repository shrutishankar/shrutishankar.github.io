define([], function(){
    var TopbarController = function($scope, $rootScope, $mdMedia) {
        this._scope = $scope;
        this._rootScope = $rootScope;
        this._mdMedia = $mdMedia;
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
        },

        toggleMenu: function(){
            this._rootScope.globalSettings.menuOpen = !this._rootScope.globalSettings.menuOpen;
        }
    };

    return TopbarController;
});
