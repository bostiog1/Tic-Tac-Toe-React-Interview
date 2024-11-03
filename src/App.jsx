import PlayerBoard from "./components/PlayerBoard";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScoreBoard />

      {/* Divider line between ScoreBoard and Player Boards */}
      <div className="w-full border-t border-neutral-700 my-4"></div>

      {/* Player boards */}
      <div className="flex">
        <PlayerBoard isPlayerX={true} />
        <PlayerBoard isPlayerX={false} />
      </div>
    </div>
  );
};

export default App;
