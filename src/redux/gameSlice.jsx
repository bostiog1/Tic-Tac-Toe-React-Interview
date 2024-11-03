import { createSlice } from "@reduxjs/toolkit";

// Load scores from localStorage
const loadScoresFromLocalStorage = () => {
  const savedScores = localStorage.getItem("scores");
  return savedScores ? JSON.parse(savedScores) : { x: 0, o: 0 };
};

// Save scores to localStorage
const saveScoresToLocalStorage = (scores) => {
  localStorage.setItem("scores", JSON.stringify(scores));
};

// Initial state of the game
const initialState = {
  board: Array(9).fill(null),
  isXTurn: true,
  winner: null,
  winLine: null,
  scores: loadScoresFromLocalStorage(),
  messages: {
    playerXMessage: "Game started! Your turn:",
    playerOMessage: "Game started! Wait your opponent.",
  },
  winningLines: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    handleClick: (state, action) => {
      // Reducer for handling a player's click
      const { index } = action.payload; // Get the clicked square index
      if (state.board[index] || state.winner) return; // Ignore if square is taken or game is won

      state.board[index] = state.isXTurn ? "X" : "O"; // Place X or O on the board

      // Check winner
      const winner = checkWinner(state.board, state.winningLines);

      if (winner) {
        state.winner = winner.player; // Set the winner
        state.winLine = winner.line; // Save the winning line
        state.scores[winner.player === "X" ? "x" : "o"] += 1; // Update scores based on the winner

        state.messages = {
          playerXMessage: winner.player === "X" ? "You won!" : "You lost!",
          playerOMessage: winner.player === "O" ? "You won!" : "You lost!",
        };
        saveScoresToLocalStorage(state.scores); // Save scores to localStorage on win
      } else if (state.board.every((square) => square !== null)) {
        state.messages = {
          playerXMessage: "Draw!",
          playerOMessage: "Draw!",
        };
      } else {
        state.isXTurn = !state.isXTurn; // Switch turns
        state.messages = {
          playerXMessage: state.isXTurn ? "Your turn:" : "Wait your opponent.",
          playerOMessage: !state.isXTurn ? "Your turn:" : "Wait your opponent.",
        };
      }
    },
    // Reducer to reset the game
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isXTurn = true;
      state.winner = null;
      state.winLine = null;
      state.messages = {
        playerXMessage: "Game started! Your turn:",
        playerOMessage: "Game started! Wait your opponent.",
      };
    },
    // Reducer to reset the scores
    resetScores: (state) => {
      state.scores = { x: 0, o: 0 };
      state.board = Array(9).fill(null);
      state.isXTurn = true;
      state.winner = null;
      state.winLine = null;
      state.messages = {
        playerXMessage: "Game started! Your turn:",
        playerOMessage: "Game started! Wait your opponent.",
      };
    },
  },
});

// Function to check for a winner based on the current board and winning lines
function checkWinner(board, winningLines) {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    // Check if three in a row
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // Return the winner and the winning line
      return { player: board[a], line: i };
    }
  }
  return null;
}

export const { handleClick, resetGame, resetScores } = gameSlice.actions;
export default gameSlice.reducer;
