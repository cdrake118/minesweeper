const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
   let board = [];
  for(rowsIndex=0; rowsIndex<numberOfRows; rowsIndex++){
      row = [];
      for(columnsIndex=0; columnsIndex<numberOfColumns; columnsIndex++){
            row.push(' ');
      }
      board.push(row);
  }
  return board;
};

// console.log(generatePlayerBoard(3, 3));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for(rowsIndex=0; rowsIndex<numberOfRows; rowsIndex++){
        row = [];
        for(columnsIndex=0; columnsIndex<numberOfColumns; columnsIndex++){
              row.push(null);
        }
        board.push(row);
    }
    numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced < numberOfBombs){
       let randomRowIndex = Math.floor(Math.random() * numberOfRows);
       let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
       board[randomRowIndex][randomColumnIndex] = 'B';
       numberOfBombsPlaced+=1;
    }
    return board;    
}

const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(5,4);
let bombBoard = generateBombBoard(5,4,5);

console.log('Player Board: '); 
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);