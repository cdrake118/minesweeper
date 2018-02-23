/* 
How to Play 
1. Open terminal and navigate to the directory of the game.js file 
2. Start node by typing node.
3. Type .load game.js 
4. Type g = new Game(3, 3, 2); to start a new game.  This will create a board with 3 rows, 3 columns, and two bombs. you can adjust the dimensions and number of bombs. You will need a new name for each new game you start. For example g2, g3 etc.
5. To flip a tile enter the command  g.playMove(0,0) ,  where g is the name of your new game, and (0,0) is the row,column index you wish to flip, it counts from 0 so the top left tile would be 0,0. To make your next move you could use g.playMove(1,2)
6. You win when you have flipped over all tiles that are not bombs.
7. Type .exit to quit.
*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     How to Play 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     1. Open terminal and navigate to the directory of the minesweeper.js file 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     2. Start node by typing node.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     3. Type .load minesweeper.js 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     4. Type g = new Game(3, 3, 2); to start a new game.  This will create a board with 3 rows, 3 columns, and two bombs. you can adjust the dimensions and number of bombs. You will need a new name for each new game you start. For example g2, g3 etc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     5. To flip a tile enter the command  g.playMove(0,0) ,  where g is the name of your new game, and (0,0) is the row,column index you wish to flip, it counts from 0 so the top left tile would be 0,0. To make your next move you could use g.playMove(1,2)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     6. You win when you have flipped over all tiles that are not bombs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     7. Type .exit to quit.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _board = require('./board');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('Game Over! Final Board:');
        this._board.print();
      } else if (!this._board.hasSafeTiles()) {
        console.log('Congratulations, you won!');
      } else {
        console.log('Current board:');
        this._board.print();
      }
    }
  }]);

  return Game;
}();