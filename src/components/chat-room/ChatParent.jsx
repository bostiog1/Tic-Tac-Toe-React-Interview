import ChatWindow from "./ChatWindow";

const ChatParent = () => {
  return (
    <div className="flex flex-col gap-16 w-full max-w-7xl mx-auto p-8 md:flex-row">
      <ChatWindow
        title="Player 1"
        sender="person1"
        colorScheme="green" 
        icon="X" 
      />
      <ChatWindow
        title="Player 2"
        sender="person2"
        colorScheme="green" 
        icon="O" 
      />
    </div>
  );
};

export default ChatParent;
