import PlayerBoard from "./components/tic-tac-toe/PlayerBoard";
import ScoreBoard from "./components/tic-tac-toe/ScoreBoard";
import Chat from "./components/chat-room/Chat";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScoreBoard />
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8">
        <PlayerBoard isPlayerX={true} />
        <PlayerBoard isPlayerX={false} />
      </div>
      <Chat />
    </div>
  );
};

export default App;
