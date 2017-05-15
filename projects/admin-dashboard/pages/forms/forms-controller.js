define([], function() {
    var FormsController = function($scope, $mdMedia) {
        this._scope = $scope;
        $scope.$mdMedia = $mdMedia;

    };

    FormsController.getName = function() {
        return "FormsController";
    };

    FormsController.prototype = {
        // Add proto methods here

        valid: function(formName, name, type) {
            if (this._scope[formName] && this._scope[formName][name]) {
                switch(type) {
                    case "required" : return this._scope[formName][name].$dirty && this._scope[formName][name].$error.required;
                    case "pattern" : return this._scope[formName][name].$dirty && this._scope[formName][name].$invalid;
                    default: 
                }
            }
            return true;
        }

    };

    return FormsController;
})