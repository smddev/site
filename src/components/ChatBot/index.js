import React, { useEffect, useState } from 'react'
import Chatbot, { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import styled from "styled-components";
import config from './chatbotConfig';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import validator from './validator'
import { FormattedMessage, useIntl } from 'react-intl';
import './styles.css'
import IconButton from '../../atoms/IconButton';
import Robot from '../../icons/Robot';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
`;

const assistentUrl = process.env.ASSISTENT_URL || 'http://localhost:8000'

const ChatBot = () => {
  const intl = useIntl();
  const [ show, setShow ] = useState(false)
  const [history, setHistory] = useState([createChatBotMessage({message: <FormattedMessage id='chatbot.initial'/>})])

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(`${assistentUrl}/messages`, {
          credentials: "include"
        })
        const data = await response.json()
        const hist = data.map((m) => {
          const { content: message, type: t } = m
          return t === 'ai' ? createChatBotMessage({message}) : createClientMessage(message)
        })

        setHistory((prev) => [...prev, ...hist])
      } catch (error) {
        console.log("failed to load message history")
      }
    }
    fetchHistory()
  }, [])

  const toggleChat = () => {
    setShow((s) => !s);
  }

  const saveMessages = (messages, HTMLString) => {
    setHistory(messages)
  };

  return (
    <ChatbotContainer>
      {show && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          validator={validator}
          placeholderText={intl.formatMessage({id: 'chatbot.placeholder'})}
          messageHistory={history}
          saveMessages={saveMessages}
        />
      )}

      <IconButton
        icon={Robot}
        onClick={toggleChat}
      />
    </ChatbotContainer>
  );
};

export default ChatBot