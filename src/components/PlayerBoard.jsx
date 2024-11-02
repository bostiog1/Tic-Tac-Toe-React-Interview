import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../redux/gameSlice";
import Square from "./Square";

const PlayerBoard = ({ isPlayerX }) => {
  const { board, isXTurn, winner, winLine } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();
  const isActive = isPlayerX ? isXTurn : !isXTurn;
  const hasWon = winner === (isPlayerX ? "X" : "O");

  const getLineStyle = () => {
    const baseStyle = "absolute bg-white z-10";

    // Horizontal lines
    if (winLine === 0)
      return `${baseStyle} h-0.5 w-[90%] top-[16.67%] left-[5%]`;
    if (winLine === 1) return `${baseStyle} h-0.5 w-[90%] top-[50%] left-[5%]`;
    if (winLine === 2)
      return `${baseStyle} h-0.5 w-[90%] top-[83.33%] left-[5%]`;

    // Vertical lines
    if (winLine === 3)
      return `${baseStyle} w-0.5 h-[90%] left-[16.67%] top-[5%]`;
    if (winLine === 4) return `${baseStyle} w-0.5 h-[90%] left-[50%] top-[5%]`;
    if (winLine === 5)
      return `${baseStyle} w-0.5 h-[90%] left-[83.33%] top-[5%]`;

    // Diagonal lines
    if (winLine === 6)
      return `${baseStyle} w-[140%] h-0.5 top-[50%] left-[-20%] rotate-45`;
    if (winLine === 7)
      return `${baseStyle} w-[140%] h-0.5 top-[50%] left-[-20%] -rotate-45`;

    return "";
  };

  return (
    <div
      className={`w-1/2 p-8 transition-all duration-300 ${
        !isActive && "opacity-30"
      }`}
    >
      {/* <h2 className="text-3xl font-bold mb-4 pb-4 text-center">
        Player {isPlayerX ? "X" : "O"}
      </h2> */}
      {winner && (
        <div
          className={`text-2xl font-semibold mb-4 text-center ${
            hasWon ? "text-green-500" : "text-red-500"
          }`}
        >
          {hasWon ? "You win!" : "You lost!"}
        </div>
      )}
      <div className="relative max-w-[300px] mx-auto bg-neutral-800 rounded-lg">
        {/* Display winning line if game is won */}
        {winner && winLine !== null && <div className={getLineStyle()}></div>}

        {/* Grid lines */}
        <div className="absolute inset-4">
          <div className="absolute left-1/3 top-0 h-full w-0.5 bg-neutral-600"></div>
          <div className="absolute right-1/3 top-0 h-full w-0.5 bg-neutral-600"></div>
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-neutral-600"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-neutral-600"></div>
        </div>

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
