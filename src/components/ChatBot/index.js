import React, {useEffect, useRef, useState} from 'react'
import Chatbot from "react-chatbot-kit";
import ChatbotError, {createChatBotMessage, createClientMessage} from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import styled from "styled-components";
import config from './chatbotConfig';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import validator from './validator'
import {FormattedMessage, useIntl} from 'react-intl';
import './styles.css'
import MessageSound from '../../sounds/quick-short-shutdown-sound.mp3';
import {motion} from "framer-motion";
import Logo from "../../icons/Logo";
import ChatbotButton from "./chatbotButton";


const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
`;

const ChatbotWrapper = styled(motion.div)`
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s, visibility 0.5s;
`;

const assistentUrl = process.env.ASSISTENT_URL || 'http://localhost:8000'

const ChatBot = () => {
  const intl = useIntl();
  const [ show, setShow ] = useState(false)
  const [history, setHistory] = useState([createChatBotMessage({message: <FormattedMessage id='chatbot.initial'/>})])
  const [initialVisit, setInitialVisit] = useState(false)
  const historyRef = useRef(history);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    historyRef.current = history
  }, [history]);

  useEffect(() => {
    if (initialVisit) {
      const timer = setTimeout(() => {
        if (historyRef.current.length <= 1) {
          setShow(true);
          const audio = new Audio(MessageSound);
          audio.play().catch((error) => {
            console.error("Failed to play sound:", error);
          });
        }
      }, 30000);

      // Cleanup the timer on unmount
      return () => clearTimeout(timer);
    }
  }, [initialVisit]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(`${assistentUrl}/messages`, {
          credentials: "include",
        })
        const data = await response.json()
        const hist = data.map((m) => {
          const { content: message, type: t } = m
          return t === 'ai' ? createChatBotMessage({message}) : createClientMessage(message)
        })

        setHistory((prev) => [...prev, ...hist])
        setInitialVisit(hist.length === 0);
        setIsLoaded(true);
      } catch (error) {
        console.log("failed to load message history")
        setInitialVisit(false);
        setIsLoaded(true);
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
      <ChatbotContainer $isVisible={show}>
        {isLoaded && (
          <ChatbotWrapper
              $isVisible={show}
              initial={{ opacity: 0, x: 350 }}
              animate={{ opacity: show ? 1 : 0, x: show ? 0 : 350 }}
              transition={{ duration: 0.5 }}
          >
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                validator={validator}
                placeholderText={intl.formatMessage({ id: 'chatbot.placeholder' })}
                messageHistory={history}
                saveMessages={saveMessages}
            />
          </ChatbotWrapper>)}

        <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        >
          <ChatbotButton
              icon={Logo}
              onClick={toggleChat}
              isChatOpen={show}
          >
          </ChatbotButton>
        </motion.div>
      </ChatbotContainer>
  );
};

export default ChatBot