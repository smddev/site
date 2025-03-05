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

  handleQuestion = async (question) => {
    const botMessage = this.createChatBotMessage({
      question,
    });

    this.addMessageToState(botMessage);
  };
}

export default ActionProvider;
