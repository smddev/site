import React from 'react'
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import styled from "styled-components";
import config from './chatbotConfig';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import validator from './validator'
import { useIntl } from 'react-intl';
import './styles.css'

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensure the chatbot is above other elements */
`;

const ChatBot = () => {
  const intl = useIntl();
  return (
    <ChatbotContainer>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        validator={validator}
        placeholderText={intl.formatMessage({id: 'chatbot.placeholder'})}
      />
    </ChatbotContainer>
  );
};

export default ChatBot