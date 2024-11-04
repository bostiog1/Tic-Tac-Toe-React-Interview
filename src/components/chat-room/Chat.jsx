import ChatBox from "./ChatBox";

const Chat = () => {
  return (
    <div className="flex flex-col gap-16 w-full max-w-7xl mx-auto p-8 md:flex-row">
      <ChatBox title="Player 1" sender="person1" icon="X" />
      <ChatBox title="Player 2" sender="person2" icon="O" />
    </div>
  );
};

export default Chat;
