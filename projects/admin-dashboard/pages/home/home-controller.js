define([], function() {
    var HomeController = function($scope, $http) {
        $scope.debug = false;
        this.setupMultiselect();
    };

    HomeController.getName = function() {
        return "HomeController";
    };

    HomeController.prototype = {

        setupMultiselect: function() {
            this.multiselectOptions = [
                { label: "HF 770", value: "" },
                { label: "HF 750", value: "" },
                { label: "CS 603", value: "" },
                { label: "CS 881", value: "" },
                { label: "CS 753", value: "" },
                { label: "CS 675", value: "" },
                { label: "CS 651", value: "" }
            ];

            this.multiselectSelectedOptions = [];
        }
    };
    
    return HomeController;
});
