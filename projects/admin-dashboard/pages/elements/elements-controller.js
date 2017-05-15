define([], function() {
    var ElementsController = function($scope, $mdMedia) {
        this._mdMedia = $mdMedia;
        this._scope = $scope;
        this._scope.totalItems = 64;
        this._scope.currentPage = 4;
        this._scope.maxSize = 5;
        this._scope.bigTotalItems = 175;
        this._scope.bigCurrentPage = 1;
    };

    ElementsController.getName = function() {
        return "ElementsController";
    };

    ElementsController.prototype = {
        
        setPage: function(pageNo){
            this.$scope.currentPage = pageNo;
        },

        pageChanged: function(){
            $log.log('Page changed to: ' + $scope.currentPage);
        }
    };

    return ElementsController;
})