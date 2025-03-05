// chatbotConfig.js
import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit';

import {theme} from "../../theme";
import BotChatMessage from './customMessage';

import { FormattedMessage } from 'react-intl'



const config = {
  initialMessages: [createChatBotMessage({message: <FormattedMessage id='chatbot.initial'/>})],
  customComponents: {
    header: () => <div />,
    botChatMessage: BotChatMessage,
  },
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
