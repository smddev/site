import React, { useState, useEffect } from "react";
import { theme } from "../../theme";
import { border } from "styled-system";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

const assistentUrl = process.env.ASSISTENT_URL || 'http://localhost:8000'

export default function BotChatMessage({ message: payload, loader }) {
  const { message, question, actionProvider, id } = payload;

  useEffect(() => {
    if (question) {
      const fetchAnswer = async (question) => {
        try {
          const response = await fetch(`${assistentUrl}/messages`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          actionProvider.updateMessageInState({id, message: data})

        } catch (error) {
          console.error("Error:", error);
          actionProvider.updateMessageInState({id, message: <FormattedMessage id="chatbot.error"/>})
        }
      };
      fetchAnswer(question);
    }
  }, [question]);

  return (
      <motion.div
          className="react-chatbot-kit-chat-bot-message"
          initial={{ opacity: 0, x: -50 }} // Начальное состояние: сообщение скрыто слева
          animate={{ opacity: 1, x: 0 }}   // Анимация: сообщение появляется, двигаясь вправо
          transition={{ duration: 0.3 }}   // Длительность анимации
      >
        <span>{message || loader}</span>
        <div
            className="react-chatbot-kit-chat-bot-message-arrow"
        ></div>
      </motion.div>
  );
}
