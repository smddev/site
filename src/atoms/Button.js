import React from 'react';
import arrowImg from '../arrow-long.png'
import styled from 'styled-components';
import {space} from 'styled-system'

const Button_Arrow = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -6px;
`

const Button = ({children, className, onClick}) => <div {...{onClick, className}}>
    <Button_Body>
        {children}
    </Button_Body>
    <Button_Arrow src={arrowImg}/>
</div>

const StyledButton = styled(Button)`
  user-select: none; 
  position: relative;
  display: inline-block;
  padding-right: 40px;
  cursor: pointer;
  ${space}
`

const Button_Body = styled.div`
  background-color: ${p => p.theme.colors.orange[1]};
  padding: 16px 70px 14px 25px;
  transition: background-color 0.5s;
  ${StyledButton}:hover & {
    background-color: ${p => p.theme.colors.orange[2]};
  }
  
  ${StyledButton}:active & {
    background-color: ${p => p.theme.colors.orange[3]};
  } 
`

export default StyledButton;