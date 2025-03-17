import React from "react";
import styled, {css} from 'styled-components';
import {FormattedMessage} from "react-intl";
import {H4, H5, Subtitle} from "../../atoms";

const ButtonBody = styled.div`
    border-radius: 50%;
    user-select: none;
    width: 110px;
    height: 100px;
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
`;

const BlinkingText = styled(H5)`
    margin-top: 5px;
    transition: opacity 0.3s ease;
    ${({ $isChatOpen }) =>
            !$isChatOpen &&
            css`
      animation: blink 2.5s infinite;
    `}

    @keyframes blink {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
}
`;

const ChatbotButton = ({ icon: Icon, onClick, isChatOpen }) => {
    return (
        <ButtonBody onClick={onClick}>
            <Icon />
            <BlinkingText $isChatOpen={isChatOpen}>
                <FormattedMessage id="chatbot.button.label"/>
            </BlinkingText>
        </ButtonBody>
    );
};

export default ChatbotButton;
