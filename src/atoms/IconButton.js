import React from 'react'
import styled, {css} from 'styled-components';

const yellowBackgroundStyles = css`
  cursor: pointer;
  transition: background .5s;

  color: ${p => p.theme.colors.white[0]};
  
  background-color: ${p => p.theme.colors.orange[1]};
  &:hover {
    background-color: ${p => p.theme.colors.orange[2]};
  }
  &:active {
    background-color: ${p => p.theme.colors.orange[3]};
  }
`

const ButtonBody = styled.div`
    border-radius: 50%;
    user-select: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    ${yellowBackgroundStyles}
`

const IconButton = ({icon: Icon, onClick}) => {
    return (
        <ButtonBody onClick={onClick}>
            <Icon/>
        </ButtonBody>
    )
}

export default IconButton;