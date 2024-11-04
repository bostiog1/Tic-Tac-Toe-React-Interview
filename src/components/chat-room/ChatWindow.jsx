import { useEffect, useRef } from "react";
import MessageInput from "./MessageInput";
import { useSelector } from "react-redux";

const ChatWindow = ({ title, sender, colorScheme, icon }) => {
  const messagesEndRef = useRef(null);
  const messages = useSelector((state) => state.game.chatMessages);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 border rounded-t-lg shadow-lg bg-gray-800">
      <div className="p-4 border-b bg-neutral-900 flex items-center gap-2 rounded-t-lg">
        <div
          className={`w-6 h-6 rounded-full flex items-center text-yellow-300 justify-center bg-neutral-500 text-white`}
        >
          {icon}
        </div>
        <h2 className="font-semibold text-sm md:text-lg">{title}</h2>
      </div>

      <div className="h-32 md:h-96 p-4 overflow-y-auto flex flex-col gap-4 bg-neutral-800">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === sender ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.sender === sender
                  ? `bg-${colorScheme}-500 text-white rounded-br-none`
                  : " bg-neutral-400 text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === sender
                    ? `text-${colorScheme}-100`
                    : "text-gray-500"
                }`}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Invisible div to auto-scroll */}
      </div>

      <div className="p-4 bg-neutral-800 ">
        <MessageInput
          sender={sender}
          colorScheme={colorScheme}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
