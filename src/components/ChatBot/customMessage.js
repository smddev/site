import React, { useState, useEffect } from "react";
import { theme } from "../../theme";
import { border } from "styled-system";

export default function BotChatMessage({ message: payload, loader }) {
  const { message: m, question } = payload;

  const [message, setMessage] = useState(m);

  useEffect(() => {
    if (question) {
      const fetchAnswer = async (question) => {
        try {
          const response = await fetch("http://localhost:8000/ask", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setMessage(data)

        } catch (error) {
          console.error("Error:", error);
          setMessage("Sorry, there was an error processing your request.")
        }
      };
      fetchAnswer(question);
    }
  }, [question]);

  return (
    <div
      className="react-chatbot-kit-chat-bot-message"
      style={{ backgroundColor: theme.colors.orange[1] }}
    >
      <span>{message || loader}</span>
      <div
        className="react-chatbot-kit-chat-bot-message-arrow"
        style={{ borderRightColor: theme.colors.orange[1] }}
      ></div>
    </div>
  );
}
