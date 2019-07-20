# 🚀 Welcome to your new awesome project!

This project has been created using **webpack scaffold**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application


**To View The Application - Please follow the below steps**

**1. To begin with, we need to install all the node dependencies.**

```
npm install
```
This allows us to use webpack features as we mentioned webpack as dependency in project.


**2. Once the npm module installation process completes. You can directly use-**

```
npm start
```
to run the application in livereload mode. which means all your changes will be reflected in browser with immediate affect.


**Application Description:**
This application has mainly three Class Modules namely Board, Player, Index

- **Index** contains the main control to invoke any method from the Board and Player Classes.
- **Board** Class contains the default skeleton of the TicTacToe Board and all the required methods for getting and calculating the 
  board states. Board states are handled as a 3*3 array. i.e. array with 9 cells and if considered as matrix 3X3.
  
  **Methods available in board**

  getAvailableMoves() - Fetches the empty positions on the board
  isFull() - returns true if board is full
  isEmpty() - returns true if board is empty
  isTerminal() - returns true if the board reached a state of having a winner either X|O|Draw
  insert(symbol, position) - accepts symbol to be inserted into the cell and position of the cell and inserts the data into board map.

- **Player** Class contains the default methods that aids in calculation of best possible moves for computer. Also calculates node maps   existing states.

  **Methods available in Player**
  getBestMove(board, maximizing, callback, depth) - it dervies the best move possible for computer to take.
  - moard is the object of the current Board
  - maximizing is a state value that defines the probability of how close the user is to winning and doing so aiding in calculating best     possible move.
  - callback is used to notify the callee that move calculation is complete and returns the move value i.e. position / cell
  - depth is the level of hardness. varying from -1 to 4.
    where -1 is hardest level, and 1 - 4 is very easy, easy, medium, hard respectively
    
Player will be provided with a option to select who makes the first move i.e. starting player - Human / Computer
Once selected the level of hardness and starting player you are good to go and have fun.

**Note:** By Default, the starting player will be Human and the level of hardness will be very easy.
  

