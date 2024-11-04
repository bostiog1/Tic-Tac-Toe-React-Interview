import { useSelector } from "react-redux";
import PlayerBoard from "./components/tic-tac-toe/PlayerBoard";
import ScoreBoard from "./components/tic-tac-toe/ScoreBoard";
import { useEffect } from "react";
import ChatParent from "./components/chat-room/ChatParent";

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
      <ChatParent />
    </div>
  );
};

export default App;
