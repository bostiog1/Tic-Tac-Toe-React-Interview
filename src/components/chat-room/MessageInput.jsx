import { useState } from "react";
import { Send } from "lucide-react";
import { useDispatch } from "react-redux";
import { addChatMessage } from "../../redux/gameSlice";

const MessageInput = ({ sender, colorScheme }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (input.trim()) {
      dispatch(
        addChatMessage({
          sender,
          text: input,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        })
      );
      setInput("");
    }
  };

  return (
    <div className="flex gap-2 flex-wrap md:flex-nowrap">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        placeholder="Type a message..."
        className={`flex-1 p-2 border rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2`}
      />

      <button
        onClick={handleSend}
        className={`p-2 bg-${colorScheme}-500 text-white rounded-lg hover:bg-${colorScheme}-600 transition-colors`}
      >
        <Send size={20} />
      </button>
    </div>
  );
};

export default MessageInput;
