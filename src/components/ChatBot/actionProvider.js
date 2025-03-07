import React from "react";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };

  updateMessageInState = ({ id, message }) => {
    this.setState((state) => {
      const messages = [...state.messages];
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].id === id) {
          messages[i] = { ...messages[i], message: { message } };
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
