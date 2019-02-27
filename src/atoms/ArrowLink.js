import React from 'react';
import styled, {css} from 'styled-components';
import {space} from 'styled-system'
import {
    IoMdArrowBack as LeftArrow,
    IoMdArrowForward as RightArrow
} from "react-icons/io";

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


const active = p => ({
    color: p.theme.colors.orange[1]
})

export const hoverLinkStyles = css`
    cursor: pointer;
    
    &:hover {
      ${p => !p.active && {color: p.theme.colors.orange[0]}};
    }
    &:active {
      ${p => active(p)}
    }
    
    ${p => p.active && active(p)}
`


export const yellowLinkStyles = css`
    cursor: pointer;
    transition: color .5s;
    color: ${p => p.theme.colors.orange[1]};
    &:hover {
      color: ${p => p.theme.colors.orange[2]};
    }
    &:active {
      color: ${p => p.theme.colors.orange[3]};
    }
`

export default styled(ArrowLink)`
    font-weight: ${props => props.theme.fontWeights[0]};
    display: flex;
    ${hoverLinkStyles}
`