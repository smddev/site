// chatbotConfig.js
import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit';

import {theme} from "../../theme";
import BotChatMessage from './customMessage';

import { FormattedMessage } from 'react-intl'
import Logo from '../../icons/Logo';



const config = {
  initialMessages: [],
  customComponents: {
    header: () => <div />,
    botChatMessage: BotChatMessage,
    botAvatar: () => <Logo style={{width: 50, margin: '12px 15px 0 0', alignSelf: 'flex-start'}} />
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
