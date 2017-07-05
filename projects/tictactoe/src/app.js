define([
    "angular",
    "./tictactoe-controller",
    "angularAria",
    "angularAnimate",
    "angularMessages",
    "angularMaterial"
], function(angular, TicTacToeController) {

    /**
     * The app module
     */
    var app = angular.module('tictactoeApp', [
        "ngAria",
        "ngAnimate",
        "ngMessages",
        "ngMaterial"
    ]);
    
    // Controller for the game
    app.controller(TicTacToeController.getName(), TicTacToeController);

    // Bootstrap the angular application
    angular.element(document).ready(function() {
        angular.bootstrap(document, [ app.name ]);
    });
});



