// chatbotConfig.js
import { createChatBotMessage } from 'react-chatbot-kit';

import {theme} from "../../theme";
import BotChatMessage from './customMessage';


const botName = 'ExcitementBot';

const config = {
  initialMessages: [createChatBotMessage({message: "Hello"})],
  customComponents: {
    botChatMessage: BotChatMessage,
  },
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: theme.colors.orange[1],
    },
    chatButton: {
      backgroundColor: theme.colors.orange[1],
    },
  },
};

export default config;
