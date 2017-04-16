define([], function() {
    var FormsController = function($scope, $mdMedia) {
        $scope.$mdMedia = $mdMedia;
    };

    FormsController.getName = function() {
        return "FormsController";
    };

    FormsController.prototype = {
        // Add proto methods here
    };

    return FormsController;
})