define([
    "./tictactoe-model"
], function (TicTacToe) {

    /**
     * The angular controller for the game
     * @param {*}  the scope object
     */
    var TicTacToeController = function ($scope) {
        this._scope = $scope;
        this.tictactoe = new TicTacToe();
    };

    TicTacToeController.getName = function () {
        return "TicTacToeController";
    };

    TicTacToeController.prototype = {

        /**
         * Returns the current player object
         */
        getCurrentPlayer: function () {
            return this.tictactoe.getCurrentPlayer();
        },

        /**
         * The function that is called when a cell in the game board is clicked
         */
        cellClicked: function (row, index) {
            if (!this.isGameOver()) {
                this.tictactoe.setCell(row, index);
            }
        },

        /**
         * Checks whether the game is over
         * 
         * @return {boolean} true if the game is over, else false
         */
        isGameOver: function () {
            return this.tictactoe.gameOver;
        },

        /**
         * Returns the winning player if a player has won, else null
         */
        getWinner: function () {
            return this.tictactoe.winner;
        },

        /**
         * Starts a new game
         */
        resetGame: function () {
            //reset the board
            this.tictactoe.init();
        }

    };

    return TicTacToeController;
});
