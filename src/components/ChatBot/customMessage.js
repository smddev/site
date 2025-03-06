import React, { useState, useEffect } from "react";
import { theme } from "../../theme";
import { border } from "styled-system";

const assistentUrl = process.env.ASSISTENT_URL || 'http://localhost:8000'

export default function BotChatMessage({ message: payload, loader }) {
  const { message: m, question } = payload;

  const [message, setMessage] = useState(m);

  useEffect(() => {
    if (question) {
      const fetchAnswer = async (question) => {
        try {
          const response = await fetch(`${assistentUrl}/messages`, {
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
    >
      <span>{message || loader}</span>
      <div
        className="react-chatbot-kit-chat-bot-message-arrow"
      ></div>
    </div>
  );
}
