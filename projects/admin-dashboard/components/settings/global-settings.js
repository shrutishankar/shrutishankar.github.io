define([
    "./themes"
], function(
    Themes
) {

    var GlobalSettings = function($rootScope) {
        this._rootScope = $rootScope;
        this.themes = Themes;
        this.init();
    };

    GlobalSettings.prototype = {

        init: function() {
            this._rootScope.globalSettings = {
                settingsOpen: false,
                menuOpen: false,
                defaultTheme: Themes.TEAL
            }
        },

        /**
         * Returns the global settings object from the root scope
         */
        getGlobalSettings: function() {
            return this._rootScope.globalSettings;
        },

        /**
         * @return the selected theme object
         */
        getSelectedTheme: function() {
            for (key in this.themes) {
                if (this.themes.hasOwnProperty(key)) {
                    if (this.themes[key].name === this.getGlobalSettings().defaultTheme.name) {
                        return this.themes[key];
                    }
                }
            }
        }
    }

    return GlobalSettings;
});