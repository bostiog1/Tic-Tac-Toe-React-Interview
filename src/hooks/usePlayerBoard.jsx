/**
 * Custom hook to manage the tic-tac-toe game board state and interactions
 */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClick, resetGame } from "../redux/gameSlice";

export function usePlayerBoard(isPlayerX) {
  const dispatch = useDispatch();

  // Get all necessary game state from Redux store
  const { board, isXTurn, winner, winLine, isDraw, messages } = useSelector(
    (state) => state.game
  );

  // Determine if it's this player's turn to move
  const isActive = isPlayerX ? isXTurn : !isXTurn;

  // Get player-specific message and name
  const message = isPlayerX ? messages.playerXMessage : messages.playerOMessage;
  const playerName = isPlayerX ? "Player 1" : "Player 2";

  const messageColor =
    message === "You won!"
      ? "text-green-500"
      : message === "You lost!"
      ? "text-red-500"
      : "text-yellow-500";

  // Handle game reset after 5 seconds. Cleans up timer on component unmount.
  useEffect(() => {
    if (winner || isDraw) {
      const timer = setTimeout(() => {
        dispatch(resetGame());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [winner, isDraw, dispatch]);

  // Handle square click
  const handleSquareClick = (index) => {
    dispatch(handleClick({ index }));
  };

  // Determine if square should be disabled
  const isSquareDisabled = winner || (isPlayerX ? !isXTurn : isXTurn);

  return {
    board,
    winner,
    winLine,
    isActive,
    message,
    playerName,
    messageColor,
    handleSquareClick,
    isSquareDisabled,
  };
}
