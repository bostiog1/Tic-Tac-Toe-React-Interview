/**
 * Custom hook to manage chat messages and auto-scrolling functionality
 */

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export function useChatBox() {
  const messagesEndRef = useRef(null);
  const messages = useSelector((state) => state.game.chatMessages);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return { messages, messagesEndRef };
}
