import React from "react";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((state) => {
      const messages = [...state.messages, message];
      if (messages.length > 2 && messages[messages.length - 3].type === 'bot') {
        const previousBot = messages[messages.length - 3]
        const { message } = previousBot;

        delete message.messageLinks;

        messages[messages.length - 3] = {
          ...previousBot,
          message
        }
      }

      return { ...state, messages };
    });
  };

  updateMessageInState = ({ id, message, messageLinks }) => {
    this.setState((state) => {
      const messages = [...state.messages];
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].id === id) {
          messages[i] = { ...messages[i], message: { message, messageLinks } };
          return { ...state, messages }
        }
      }
      return state;
    });
  };

  handleQuestion = async (question) => {
    const botMessage = this.createChatBotMessage({
      question,
      actionProvider: this,
    });

    botMessage.message.id = botMessage.id;

    this.addMessageToState(botMessage);
  };
}

export default ActionProvider;
