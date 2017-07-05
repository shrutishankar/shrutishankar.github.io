define([], function () {

    /**
     * The tic tac toe game object
     */
    var TicTacToe = function () {
        this.players = [{
            name: "Player 1",
            symbol: "X"
        }, {
            name: "Player 2",
            symbol: "O"
        }];
        this.init();
    };

    TicTacToe.prototype = {

        /**
         * Initializes the game board and player
         */
        init: function () {
            this.board = [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
            ];
            this.winner = null;
            this.gameOver = false;
            this.setFirstPlayer();
        },

        /**
         * Sets the first player to player 1. i.e. it sets turn to 0  
         */
        setFirstPlayer: function () {
            this.turn = 0;
        },

        /**
         * Switches player according to the turn property
         * If current player = Player 1, then sets its to Player 2
         * If current player = Player 2, then sets it to Player 1
         */
        switchPlayer: function () {
            this.turn = (this.turn + 1) % 2;
        },

        /**
         * Returns the current player object
         * 
         * @return the current player object
         */
        getCurrentPlayer: function () {
            return this.players[this.turn];
        },

        /**
         * Returns the winning player if a player has won, else returns null
         * 
         * @return the winning player
         */
        getWinner: function () {
            return this.winner;
        },

        /**
         * Given a board row object and the index of cell in that row,
         * sets the cell value to the current players symbol.
         * It also switches the turn to the next player.
         * 
         * @param row {Object} the row object in the board
         * @param col {number} the index of the cell in the row.
         */
        setCell: function (row, index) {
            if (row && index >= 0 && index <= 3) {
                if (row[index] === null) {
                    row[index] = this.getCurrentPlayer().symbol;
                    this.switchPlayer();
                    this.isGameOver();
                }
            }

        },

        /**
         * Checks whether the game is over due to:
         *  - no more moves left in the board
         *  - if a player has won the game
         * 
         * @return {boolean} true if the game is over, else returns false
         */
        isGameOver: function () {
            var winner = this.whoWon();
            if (winner) {
                if (this.players[0].symbol == winner) {
                    this.winner = this.players[0];
                    this.gameOver = true;
                    return true;
                }
                if (this.players[1].symbol == winner) {
                    this.winner = this.players[1];
                    this.gameOver = true;
                    return true;
                }
            } else {
                var moves = this.movesLeft();
                if (!moves) {
                    this.gameOver = true;
                    return true;
                }
            }
        },


        /**
         * Checks if any more moves left on the board.
         * 
         * @return {boolean} true if there are any empty spaces
         */
        movesLeft: function () {
            for (var i = 0; i < this.board.length; i++) {
                for (var j = 0; j < this.board[0].length; j++) {
                    if (!this.board[i][j])
                        return true;
                }
            }
            return false;
        },

        /**
         * Checks all the possible winning combinations.
         * 
         * @return {string} the winning symbol or null if nobody has won
         */
        whoWon: function () {
            return this.checkCorners() || this.checkDiagonalLeftRight() || this.checkDiagonalRightLeft()
                || this.checkHorizontal() || this.checkVertical() || this.checkSquares();
        },

        /**
         * Checks whether a player has won through the corners of the board
         * 
         * @return {string} the winning symbol or null if nobody has won
         */
        checkCorners: function () {
            if (this.board[0][0] === this.board[0][3]
                && this.board[0][0] === this.board[3][3]
                && this.board[0][0] === this.board[3][0]) {
                return this.board[0][0];
            }

            return null;
        },

        /**
         * Checks whether a player has won horizontally on any row
         * 
         * @return {string} the winning symbol or null if nobody has won
         */
        checkHorizontal: function () {
            for (var row = 0; row < this.board.length; row++) {
                var first = this.board[row][0];
                if (first !== null) {
                    var gameWon = true;
                    for (var col = 1; col < this.board[row].length; col++) {
                        gameWon &= this.board[row][col] === first;
                    }

                    if (gameWon) {
                        return first;
                    }
                }
            }

            return null;
        },

        /**
         * Checks whether a player has won vertically on any column
         * 
         * @return {string} the winning symbol or null if nobody has won
         */
        checkVertical: function () {
            for (var col = 0; col < this.board[0].length; col++) {
                var first = this.board[0][col];
                if (first !== null) {
                    var gameWon = true;
                    for (var row = 1; row < this.board.length; row++) {
                        gameWon &= this.board[row][col] === first;
                    }

                    if (gameWon) {
                        return first;
                    }
                }
            }

            return null;
        },

        /**
         * Checks whether a player won diagonally from [0,0] to [3,3], else returns null
         * 
         * @return {string} winning symbol if a player has won, else null
         */
        checkDiagonalLeftRight: function () {
            var gameWon = true;
            var first = this.board[0][0];
            if (first != null) {
                for (var row = 1, col = 1; row < this.board.length, col < this.board[0].length; row++ , col++) {
                    gameWon &= this.board[row][col] === first;
                }
            }
            return gameWon ? first : null;
        },

        /**
         * Checks whether a player won diagonally from [0,3] to [3,0], else returns null
         * 
         * @return {string} winning symbol if a player has won, else null
         */
        checkDiagonalRightLeft: function () {
            var gameWon = true;
            var first = this.board[0][3];
            if (first != null) {
                for (var row = 1, col = 2; row < this.board.length, col >= 0; row++ , col--) {
                    gameWon &= this.board[row][col] === first;
                }
            }
            return gameWon ? first : null;

        },

        /**
         * Checks whether a player has won through any 2x2 square on the board
         * 
         * @return {string} the winning symbol or null if nobody has won
         */
        checkSquares: function () {
            // We dont need to iterate the last row and col as they are covered by previous row and col respectively
            for (var row = 0; row < this.board.length - 1; row++) {
                for (var col = 0; col < this.board[row].length - 1; col++) {
                    if (this.board[row][col] !== null) {
                        var gameWon = this.board[row][col] === this.board[row][col + 1]
                            && this.board[row][col] === this.board[row + 1][col]
                            && this.board[row][col] === this.board[row + 1][col + 1]

                        if (gameWon) {
                            return this.board[row][col];
                        }
                    }
                }
            }
            return null;
        }
    };

    return TicTacToe;
});
