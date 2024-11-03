import { useSelector, useDispatch } from 'react-redux';
import { resetScores } from '../redux/gameSlice';

const ScoreBoard = () => {
  const scores = useSelector((state) => state.game.scores);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center py-4 space-x-8">
      <span className="text-3xl font-bold">Score: {scores.x}:{scores.o}</span>
      <button
        onClick={() => dispatch(resetScores())}
        className="px-6 py-2 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default ScoreBoard;
