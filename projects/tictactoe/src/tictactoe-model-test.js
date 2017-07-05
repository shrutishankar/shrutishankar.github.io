define([
    "./tictactoe-model"
], function (TicTacToe) {

    var tictactoe = new TicTacToe();

    describe('init()', function () {
        beforeEach(function () {
            tictactoe.init();
        });

        it('should set the cells to null', function () {
            for (var row = 0; row < tictactoe.board.length; row++) {
                for (var col = 0; col < tictactoe.board[row].length; col++) {
                    expect(tictactoe.board[row][col]).toEqual(null);
                }
            }
        });

        it('should set the current player to Player 1 (X)', function () {
            expect(tictactoe.turn).toEqual(0);
        });

    });

    describe('switchPlayer()', function () {
        beforeEach(function () {
            tictactoe.init();
        });

        it('should switch to player O when player is X', function () {
            tictactoe.turn = 0;
            tictactoe.switchPlayer();
            expect(tictactoe.getCurrentPlayer().symbol).toEqual("O");
        });


        it('should switch to player X when player is O', function () {
            tictactoe.turn = 1;
            tictactoe.switchPlayer();
            expect(tictactoe.getCurrentPlayer().symbol).toEqual("X");
        });
    });

    describe('setCell()', function () {
        beforeEach(function () {
            tictactoe.init();
        });

        it('should set cell to X when current player is X', function () {
            for (var row = 0; row < tictactoe.board.length; row++) {
                for (var col = 0; col < tictactoe.board[row].length; col++) {
                    tictactoe.setCell(tictactoe.board[row], col);
                    expect(tictactoe.board[row][col]).toEqual("X");
                    tictactoe.switchPlayer();
                }
            }
        });

        it('should set cell to O when current player is O', function () {
            tictactoe.turn = 1;
            for (var row = 0; row < tictactoe.board.length; row++) {
                for (var col = 0; col < tictactoe.board[row].length; col++) {
                    tictactoe.setCell(tictactoe.board[row], col);
                    expect(tictactoe.board[row][col]).toEqual("O");
                    tictactoe.switchPlayer();
                }
            }
        });
    });

    describe('movesLeft()', function () {
        beforeEach(function () {
            tictactoe.init();
            // set entire board to some value
            for (var row = 0; row < tictactoe.board.length; row++) {
                for (var col = 0; col < tictactoe.board[row].length; col++) {
                    tictactoe.setCell(tictactoe.board[row], col);
                }
            }
        });

        it('should return true when there are some nulls on the board', function () {
            for (var row = 0; row < tictactoe.board.length; row++) {
                for (var col = 0; col < tictactoe.board[row].length; col++) {
                    tictactoe.board[row][col] = null;
                    expect(tictactoe.movesLeft()).toEqual(true);
                }
            }
        });

        it('should return false when all cell have been filled', function () {
            expect(tictactoe.movesLeft()).toEqual(false);
        });
    });

    describe('getCurrentPlayer()', function () {

        it('should return Player 1 when turn is 0', function () {
            tictactoe.turn = 0;
            expect(tictactoe.getCurrentPlayer().symbol).toEqual("X");
        });

        it('should return Player 2 when turn is 1', function () {
            tictactoe.turn = 1;
            expect(tictactoe.getCurrentPlayer().symbol).toEqual("O");
        });
    });

    describe('checkCorners()', function () {

        beforeEach(function () {
            tictactoe.init();
        });

        it('should return null when no corner is filled in', function () {
            expect(tictactoe.checkCorners()).toEqual(null);
        });

        it('should return null when all corners are not same', function () {
            tictactoe.board[0][0] = "X";
            tictactoe.board[0][3] = "X";
            tictactoe.board[3][0] = "X";
            tictactoe.board[3][3] = "O";
            expect(tictactoe.checkCorners()).toEqual(null);
        });

        it('should return winning symbol when all corners are same', function () {
            tictactoe.board[0][0] = "X";
            tictactoe.board[0][3] = "X";
            tictactoe.board[3][0] = "X";
            tictactoe.board[3][3] = "X";
            expect(tictactoe.checkCorners()).toEqual("X");

            tictactoe.board[0][0] = "O";
            tictactoe.board[0][3] = "O";
            tictactoe.board[3][0] = "O";
            tictactoe.board[3][3] = "O";
            expect(tictactoe.checkCorners()).toEqual("O");
        });
    });


    describe('checkHorizontal()', function () {

        beforeEach(function () {
            tictactoe.init();
        });

        it('should return winning symbol when all symbols in row are same', function () {
            for (var row = 0; row < 4; row++) {
                tictactoe.init();
                for (var col = 0; col < 4; col++) {
                    tictactoe.board[row][col] = "X";
                }
                expect(tictactoe.checkHorizontal()).toEqual("X");

                tictactoe.init();
                for (var col = 0; col < 4; col++) {
                    tictactoe.board[row][col] = "O";
                }
                expect(tictactoe.checkHorizontal()).toEqual("O");
            }
        });

        it('should return null when all symbols in a row are not same', function () {
            tictactoe.board = [
                ["X", "X", "X", "O"],
                ["X", "X", "O", "X"],
                ["X", "O", "X", "X"],
                ["O", "X", "X", "X"]
            ];

            expect(tictactoe.checkHorizontal()).toEqual(null);

            tictactoe.board = [
                ["X", "X", "X", null],
                ["X", "X", null, "X"],
                ["X", null, "X", "X"],
                [null, "X", "X", "X"]
            ];

            expect(tictactoe.checkHorizontal()).toEqual(null);
        });
    });

    describe('checkVertical()', function () {
        beforeEach(function () {
            tictactoe.init();
        });

        it('should return winning symbol when all symbols in column are same', function () {
            for (var col = 0; col < 4; col++) {
                tictactoe.init();
                for (var row = 0; row < 4; row++) {
                    tictactoe.board[row][col] = "X";
                }
                expect(tictactoe.checkVertical()).toEqual("X");

                tictactoe.init();
                for (var row = 0; row < 4; row++) {
                    tictactoe.board[row][col] = "O";
                }
                expect(tictactoe.checkVertical()).toEqual("O");
            }
        });

        it('should return null when all symbols in a column are not same', function () {
            tictactoe.board = [
                ["X", "X", "X", "O"],
                ["X", "X", "O", "X"],
                ["X", "O", "X", "X"],
                ["O", "X", "X", "X"]
            ];

            expect(tictactoe.checkVertical()).toEqual(null);

            tictactoe.board = [
                ["X", "X", "X", null],
                ["X", "X", null, "X"],
                ["X", null, "X", "X"],
                [null, "X", "X", "X"]
            ];

            expect(tictactoe.checkVertical()).toEqual(null);
        });
    });


    describe('checkDiagonalLeftRight()', function () {
        beforeEach(function () {
            tictactoe.init();
        });

        it('should return null when all symbols in left -> right diagonal are null', function () {
            expect(tictactoe.checkDiagonalLeftRight()).toEqual(null);
        });

        it('should return null when all symbols in left -> right diagonal are not same', function () {
            tictactoe.board[0][0] = "X";
            tictactoe.board[1][1] = "O";
            tictactoe.board[2][2] = "X";
            tictactoe.board[3][3] = "X";

            expect(tictactoe.checkDiagonalLeftRight()).toEqual(null);

            tictactoe.board[0][0] = "X";
            tictactoe.board[1][1] = "X";
            tictactoe.board[2][2] = null;
            tictactoe.board[3][3] = "X";

            expect(tictactoe.checkDiagonalLeftRight()).toEqual(null);
        });

        it('should return winning symbol when all symbols in left -> right diagonal are same', function () {
            tictactoe.board[0][0] = "X";
            tictactoe.board[1][1] = "X";
            tictactoe.board[2][2] = "X";
            tictactoe.board[3][3] = "X";

            expect(tictactoe.checkDiagonalLeftRight()).toEqual("X");

            tictactoe.board[0][0] = "O";
            tictactoe.board[1][1] = "O";
            tictactoe.board[2][2] = "O";
            tictactoe.board[3][3] = "O";

            expect(tictactoe.checkDiagonalLeftRight()).toEqual("O");
        });
    });


    describe('checkDiagonalRightLeft()', function () {
        beforeEach(function () {
            tictactoe.init();
        });

        it('should return null when all symbols in right -> left diagonal are null', function () {
            expect(tictactoe.checkDiagonalRightLeft()).toEqual(null);
        });

        it('should return null when all symbols in right -> left diagonal are not same', function () {
            tictactoe.board[0][3] = "X";
            tictactoe.board[1][2] = "O";
            tictactoe.board[2][1] = "X";
            tictactoe.board[3][0] = "X";

            expect(tictactoe.checkDiagonalRightLeft()).toEqual(null);

            tictactoe.board[0][3] = "X";
            tictactoe.board[1][2] = "X";
            tictactoe.board[2][1] = null;
            tictactoe.board[3][0] = "X";

            expect(tictactoe.checkDiagonalRightLeft()).toEqual(null);
        });

        it('should return winning symbol when all symbols in right -> left diagonal are same', function () {
            tictactoe.board[0][3] = "X";
            tictactoe.board[1][2] = "X";
            tictactoe.board[2][1] = "X";
            tictactoe.board[3][0] = "X";

            expect(tictactoe.checkDiagonalRightLeft()).toEqual("X");

            tictactoe.board[0][3] = "O";
            tictactoe.board[1][2] = "O";
            tictactoe.board[2][1] = "O";
            tictactoe.board[3][0] = "O";

            expect(tictactoe.checkDiagonalRightLeft()).toEqual("O");
        });
    });


    describe('checkSquares()', function() {

        it("should return winning symbol when a any 2x2 square has same symbol", function() {

            for (var row = 0; row < tictactoe.board.length - 1; row++) {
                for (var col = 0; col < tictactoe.board[row].length - 1; col++) {
                    tictactoe.init();
                    tictactoe.board[row][col] = "X";
                    tictactoe.board[row][col + 1] = "X";
                    tictactoe.board[row + 1][col] = "X";
                    tictactoe.board[row + 1][col + 1] = "X";
                    
                    expect(tictactoe.checkSquares()).toEqual("X");

                    tictactoe.init();
                    tictactoe.board[row][col] = "O";
                    tictactoe.board[row][col + 1] = "O";
                    tictactoe.board[row + 1][col] = "O";
                    tictactoe.board[row + 1][col + 1] = "O";
                    
                    expect(tictactoe.checkSquares()).toEqual("O");
                    
                }
            }
        });


        it("should return null when any 2x2 square has different symbols", function() {

            for (var row = 0; row < tictactoe.board.length - 1; row++) {
                for (var col = 0; col < tictactoe.board[row].length - 1; col++) {
                    tictactoe.init();
                    tictactoe.board[row][col] = "X";
                    tictactoe.board[row][col + 1] = "O";
                    tictactoe.board[row + 1][col] = "X";
                    tictactoe.board[row + 1][col + 1] = "X";
                    
                    expect(tictactoe.checkSquares()).toEqual(null);

                    tictactoe.init();
                    tictactoe.board[row][col] = "O";
                    tictactoe.board[row][col + 1] = "O";
                    tictactoe.board[row + 1][col] = null;
                    tictactoe.board[row + 1][col + 1] = "O";
                    
                    expect(tictactoe.checkSquares()).toEqual(null);
                    
                }
            }
        })
    });
});
