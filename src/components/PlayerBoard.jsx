import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../redux/gameSlice";
import Square from "./Square";
import WinningLine from "./WinningLine";
import GridLines from "./GridLines";
import WinnerMessage from "./WinnerMessage";

const PlayerBoard = ({ isPlayerX }) => {
  const { board, isXTurn, winner, winLine } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  const isActive = isPlayerX ? isXTurn : !isXTurn;
  const hasWon = winner === (isPlayerX ? "X" : "O");

  return (
    <div
      className={`w-1/2 p-8 transition-all duration-300 ${
        !isActive && "opacity-30"
      }`}
    >
      {winner && <WinnerMessage hasWon={hasWon} />}

      <div className="relative max-w-[300px] mx-auto bg-neutral-800 rounded-lg">
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
