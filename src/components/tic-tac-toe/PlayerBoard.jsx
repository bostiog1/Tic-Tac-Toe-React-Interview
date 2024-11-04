import Square from "./Square";
import WinningLine from "./WinningLine";
import GridLines from "./GridLines";
import { usePlayerBoard } from "../../hooks/usePlayerBoard";

const PlayerBoard = ({ isPlayerX }) => {
  const {
    board,
    winner,
    winLine,
    isActive,
    message,
    playerName,
    messageColor,
    handleSquareClick,
    isSquareDisabled,
  } = usePlayerBoard(isPlayerX);

  return (
    <div
      className={`w-full md:w-5/12 transition-all duration-300 ${
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
        {winner && winLine !== null && <WinningLine winLine={winLine} />}
        <GridLines />
        <div className="grid grid-cols-3 gap-0 relative">
          {board.map((square, index) => (
            <Square
              key={index}
              value={square}
              onClick={() => handleSquareClick(index)}
              disabled={isSquareDisabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerBoard;
