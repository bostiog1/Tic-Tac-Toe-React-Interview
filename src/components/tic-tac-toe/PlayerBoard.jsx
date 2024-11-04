import { useSelector, useDispatch } from "react-redux";
import { handleClick, resetGame } from "../../redux/gameSlice";
import Square from "./Square";
import WinningLine from "./WinningLine";
import GridLines from "./GridLines";
import { useEffect } from "react";

const PlayerBoard = ({ isPlayerX }) => {
  const { board, isXTurn, winner, winLine, messages } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  // Determine if the current player has the active turn
  const isActive = isPlayerX ? isXTurn : !isXTurn;
  const message = isPlayerX ? messages.playerXMessage : messages.playerOMessage;

  const playerName = isPlayerX ? "Player 1" : "Player 2";

  // Determine message color based on game state
  const messageColor =
    message === "You won!"
      ? "text-green-500"
      : message === "You lost!"
      ? "text-red-500"
      : "text-yellow-500"; // Default for neutral messages

  // Effect to reset the game after a win
  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        dispatch(resetGame()); // Reset game state after 5 seconds
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount or when winner changes
    }
  }, [winner, dispatch]);

  return (
    <div
      className={`w-full lg:w-1/2  transition-all duration-300 ${
        !isActive && "opacity-45"
      }`}
    >
      <h2 className="text-lg sm:text-2xl font-bold text-center mb-2">
        {playerName}
      </h2>
      <div
        className={`text-lg sm:text-2xl font-semibold mb-4 text-center ${messageColor}`}
      >
        {message}
      </div>
      <div className="relative max-w-[200px] sm:max-w-[275px] mx-auto bg-neutral-800 rounded-lg">
        {/* Display winning line if game is won */}
        {winner && winLine !== null && <WinningLine winLine={winLine} />}

        {/* Static grid lines */}
        <GridLines />

        {/* Game grid with squares */}
        <div className="grid grid-cols-3 gap-0 relative">
          {board.map((square, index) => (
            <Square
              key={index}
              value={square}
              onClick={() => dispatch(handleClick({ index }))}
              disabled={winner || (isPlayerX ? !isXTurn : isXTurn)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerBoard;
