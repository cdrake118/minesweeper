/* 
How to Play 
1. Open terminal and navigate to the directory of the minesweeper.js file 
2. Start node by typing node.
3. Type .load minesweeper.js 
4. Type g = new Game(3, 3, 2); to start a new game.  This will create a board with 3 rows, 3 columns, and two bombs. you can adjust the dimensions and number of bombs. You will need a new name for each new game you start. For example g2, g3 etc.
5. To flip a tile enter the command  g.playMove(0,0) ,  where g is the name of your new game, and (0,0) is the row,column index you wish to flip, it counts from 0 so the top left tile would be 0,0.
6. You win when you have flipped over all tiles that are not bombs.
*/


class Game{
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
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
}

class Board{
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows*numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    print(){
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    }

    get playerBoard(){
        return this._playerBoard;
    }

   static generatePlayerBoard(numberOfRows, numberOfColumns) {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

     static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        const board = [];
    
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
          const row = [];
          for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(null);
          }
          board.push(row);
        }
    
        let numberOfBombsPlaced = 0;
    
        while (numberOfBombsPlaced < numberOfBombs) {
          const randomRowIndex = Math.floor(Math.random() * numberOfRows);
          const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
          if (board[randomRowIndex][randomColumnIndex] !== 'B') {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
          }
        }
    
        return board;
      }

    flipTile(rowIndex, columnIndex){
        if(this._playerBoard[rowIndex][columnIndex] != ' '){
            console.log("This tile has already been flipped!");
            return;
        }
        else if(this._bombBoard[rowIndex][columnIndex] === 'B'){
            this._playerBoard[rowIndex][columnIndex] = 'B';
        }
        else{
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    }

    

    getNumberOfNeighborBombs(rowIndex, columnIndex){
        const neighborOffsets = [ 
            [-1, -1], 
            [-1, 0],
            [-1, 1], 
            [0, -1], 
            [0, 1], 
            [1, -1], 
            [1, 0], 
            [1, 1] 
        ];
         const numberOfRows = this._bombBoard.length;
         const numberOfColumns = this._bombBoard[0].length;
         let numberOfBombs = 0;
    
        neighborOffsets.forEach(offset => {
         const neighborRowIndex = rowIndex + offset[0];
         const neighborColumnIndex = columnIndex + offset[1];
        if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){ 
           if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
            numberOfBombs+=1;
           }
        }
        })
        return numberOfBombs;
    }

    
    hasSafeTiles(){
        return this._numberOfTiles !== this._numberOfBombs; 
    }

}