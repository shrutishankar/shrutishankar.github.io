define([], function() {
    var PagesController = function($scope, $mdDialog) {
        this._scope = $scope;
        this._mdDialog = $mdDialog;
    };

    PagesController.getName = function() {
        return "PagesController";
    };

    PagesController.prototype = {
        
        gotoLoginPage: function() {
            window.location.hash = "#!/pages/login"
        },

        gotoRegisterPage: function() {
            window.location.hash = "#!/pages/register"
        },

        gotoForgotPasswordPage: function() {
            window.location.hash = "#!/pages/forgot-password";
        },

        showTermsAndConditions: function (event) {
            this._mdDialog.show({
                templateUrl: 'pages/pages/terms-and-conditions.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: false
            });
        }
    };

    return PagesController;
})