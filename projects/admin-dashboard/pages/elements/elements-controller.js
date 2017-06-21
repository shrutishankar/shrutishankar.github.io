define([], function() {
    var ElementsController = function($scope, $mdMedia, $mdToast) {
        this._mdMedia = $mdMedia;
        this._mdToast = $mdToast;
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
            this._scope.currentPage = pageNo;
        },

        pageChanged: function(){
            $log.log('Page changed to: ' + $scope.currentPage);
        },

        showToast: function(title, message, type){
            this._mdToast.show(
                this._mdToast.simple()
                    .textContent(message)
                    .position('bottom right' )
                    .highlightClass('md-warn')
                    .hideDelay(3000)
                );
        }
    };

    return ElementsController;
})