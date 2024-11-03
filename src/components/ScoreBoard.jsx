// Displays the current scores and provides a button to reset them.

import { useSelector, useDispatch } from "react-redux";
import { resetScores } from "../redux/gameSlice";

const ScoreBoard = () => {
  const scores = useSelector((state) => state.game.scores); // Select scores from Redux state
  const dispatch = useDispatch(); // Access dispatch to reset scores

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center py-4 sm:space-x-4 space-y-4 sm:space-y-0">
      {/* Display the score */}
      <span className="text-2xl sm:text-3xl font-bold">
        Score: {scores.x}:{scores.o}
      </span>
      {/* Button to reset scores */}
      <button
        onClick={() => dispatch(resetScores())} // Dispatch resetScores action on click
        className="px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white text-base sm:text-lg rounded-md hover:bg-green-700 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default ScoreBoard;
