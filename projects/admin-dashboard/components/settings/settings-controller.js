define([
    "./themes",
    "./global-settings"
], function(
    Themes,
    GlobalSettings
){
    var SettingsController = function($scope, $rootScope) {
        this._scope = $scope;
        this._rootScope = $rootScope;
        this.themes = Themes;
        this.init();
    };

    /**
     * returns the name of the controller
     */
    SettingsController.getName = function() {
        return "SettingsController";
    };

    SettingsController.prototype = {
        
        init: function() {
            this.globalSettings = new GlobalSettings(this._rootScope);
        },
        
        getGlobalSettings: function() {
            return this.globalSettings.getGlobalSettings();
        },

        changeTheme: function(theme) {
            this.globalSettings.getGlobalSettings().defaultTheme = theme;
        }
    };

    return SettingsController;
});



