define([], function(){
    var MultiselectController = function($scope) {
        this._scope = $scope;
        this.isopen = false;
    };


    /**
     * returns the name of the controller
     */
    MultiselectController.getName = function() {
        return "MultiselectController";
    };

    MultiselectController.prototype = {
        
        /**
         * returns the button label for the multi select dropdown
         */
        getButtonLabel:  function() {
            return this.buttonLabel ? this.buttonLabel : "Select";
        },

        /**
         * the callback for the click event on each item in the dropdown
         */
        selectItem: function(item, event) {
            if (item.selected) {
                // unselect it
                if (this.selectedOptions) {
                    var index = this.selectedOptions.indexOf(item);
                    this.selectedOptions.splice(index, 1);
                }
                item.selected = false;
            } else {
                // select it
                 if (this.selectedOptions) {
                     this.selectedOptions.push(item);
                 }
                item.selected = true;
            }

            event.stopPropagation();
        }
    };

    return MultiselectController;
});



