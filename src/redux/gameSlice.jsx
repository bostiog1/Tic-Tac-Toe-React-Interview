import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(9).fill(null),
  isXTurn: true,
  winner: null,
  winLine: null,
  scores: { x: 0, o: 0 },
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
      const { index } = action.payload;
      if (state.board[index] || state.winner) return;

      state.board[index] = state.isXTurn ? "X" : "O";

      // Check winner
      const winner = checkWinner(state.board, state.winningLines);
      if (winner) {
        state.winner = winner.player;
        state.winLine = winner.line;
        state.scores[winner.player === "X" ? "x" : "o"] += 1;
      } else {
        state.isXTurn = !state.isXTurn;
      }
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isXTurn = true;
      state.winner = null;
      state.winLine = null;
    },
    resetScores: (state) => {
      state.scores = { x: 0, o: 0 };
      state.board = Array(9).fill(null);
      state.isXTurn = true;
      state.winner = null;
      state.winLine = null;
    },
  },
});

function checkWinner(board, winningLines) {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line: i };
    }
  }
  return null;
}

export const { handleClick, resetGame, resetScores } = gameSlice.actions;
export default gameSlice.reducer;
