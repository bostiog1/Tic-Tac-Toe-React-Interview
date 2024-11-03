import { useSelector } from "react-redux";
import PlayerBoard from "./components/PlayerBoard";
import ScoreBoard from "./components/ScoreBoard";
import { useEffect } from "react";

const App = () => {
  const scores = useSelector((state) => state.game.scores);

  // Effect to update localStorage whenever scores change
  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  return (
    <div className="min-h-screen bg-black text-white">
      <ScoreBoard />

      <div className="flex flex-col md:flex-row flex-grow">
        <PlayerBoard isPlayerX={true} />
        <PlayerBoard isPlayerX={false} />
      </div>
    </div>
  );
};

export default App;
