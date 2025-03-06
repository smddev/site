import React, { useState } from 'react'
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import styled from "styled-components";
import config from './chatbotConfig';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import validator from './validator'
import { useIntl } from 'react-intl';
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

const ChatBot = () => {
  const intl = useIntl();
  const [ show, setShow ] = useState(false);

  const toggleChat = () => {
    setShow((s) => !s);
  }
  return (
    <ChatbotContainer>
      {show && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          validator={validator}
          placeholderText={intl.formatMessage({id: 'chatbot.placeholder'})}
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