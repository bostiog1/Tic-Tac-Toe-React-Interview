/**
 * Custom hook to manage chat input state and message sending
 */

import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addChatMessage } from "../redux/gameSlice";

export function useChatInput(sender) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // Memoized function to handle message sending
  const handleSend = useCallback(() => {
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
  }, [input, sender, dispatch]);

  return { input, setInput, handleSend };
}
