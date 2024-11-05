import { Send } from "lucide-react";
import { useChatInput } from "../../hooks/useChatInput";

const ChatInput = ({ sender }) => {
  const { input, setInput, handleSend } = useChatInput(sender);

  return (
    <div className="flex gap-2 items-center">
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
        className={`p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors`}
      >
        <Send size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
