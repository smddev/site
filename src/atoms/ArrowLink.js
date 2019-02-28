import React from 'react';
import styled, {css} from 'styled-components';
import {space} from 'styled-system'
import {
    IoMdArrowBack as LeftArrow,
    IoMdArrowForward as RightArrow
} from "react-icons/io";
import {hoverLinkStyles} from "./index";

const ArrowStyles = css`
  font-size: 17px;
  height: 23px;
`

const ArrowLink_Left = styled(LeftArrow)`
  ${ArrowStyles};
  ${space};
`

const  ArrowLink_Right = styled(RightArrow)`
  ${ArrowStyles};
  ${space};
`

const ArrowLink = ({href, left, children, className}) => <a className={className} href={href}>
    {left && <ArrowLink_Left mr={1}/>}
    {children}
    {!left && <ArrowLink_Right ml={1}/>}
</a>

export default styled(ArrowLink)`
    font-weight: ${props => props.theme.fontWeights[0]};
    display: flex;
    ${hoverLinkStyles}
`