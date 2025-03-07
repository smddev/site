import React from "react";

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

  parse = (message) => {
    return this.actionProvider.handleQuestion(message)  
  }
}

export default MessageParser
