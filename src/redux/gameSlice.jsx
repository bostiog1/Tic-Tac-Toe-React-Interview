import { createSlice } from "@reduxjs/toolkit";

// Load data from localStorage
const loadFromLocalStorage = (key, fallback) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : fallback;
};

// Save data to localStorage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Initial state of the game
const initialState = {
  board: Array(9).fill(null),
  isXTurn: true,
  winner: null,
  winLine: null,
  isDraw: false,
  scores: loadFromLocalStorage("scores", { x: 0, o: 0 }),
  messages: {
    playerXMessage: "Game started! Your turn:",
    playerOMessage: "Game started! Wait your opponent.",
  },
  chatMessages: loadFromLocalStorage("chatMessages", []),
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
      if (state.board[index] || state.winner || state.isDraw) return; // Ignore if square is taken or game is won

      state.board[index] = state.isXTurn ? "X" : "O"; // Place X or O on the board

      // Check winner
      const winner = checkWinner(state.board, state.winningLines);

      if (winner) {
        state.winner = winner.player; // Set the winner
        state.winLine = winner.line; // Save the winning line
        state.scores[winner.player === "X" ? "x" : "o"] += 1; // Update scores based on the winner
        state.isDraw = false;

        state.messages = {
          playerXMessage: winner.player === "X" ? "You won!" : "You lost!",
          playerOMessage: winner.player === "O" ? "You won!" : "You lost!",
        };
        saveToLocalStorage("scores", state.scores);
      } else if (state.board.every((square) => square !== null)) {
        state.isDraw = true;
        state.winner = null;
        state.winLine = null;
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
    // Reducer to reset the game after 5 seconds
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isXTurn = true;
      state.winner = null;
      state.winLine = null;
      state.isDraw = false;
      state.messages = {
        playerXMessage: "Game started! Your turn:",
        playerOMessage: "Game started! Wait your opponent.",
      };
    },
    // Reducer to reset the whole game
    resetScores: (state) => {
      state.scores = { x: 0, o: 0 };
      saveToLocalStorage("scores", state.scores);
      state.board = Array(9).fill(null);
      state.isXTurn = true;
      state.winner = null;
      state.winLine = null;
      state.isDraw = false;
      state.messages = {
        playerXMessage: "Game started! Your turn:",
        playerOMessage: "Game started! Wait your opponent.",
      };
      state.chatMessages = [];
      saveToLocalStorage("chatMessages", state.chatMessages);
    },
    addChatMessage: (state, action) => {
      state.chatMessages.push(action.payload);
      saveToLocalStorage("chatMessages", state.chatMessages);
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

export const { handleClick, resetGame, resetScores, addChatMessage } =
  gameSlice.actions;
export default gameSlice.reducer;
