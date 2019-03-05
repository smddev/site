import React from 'react'
import {Link} from '@reach/router'
import styled, {withTheme, css} from 'styled-components'
import {Flex, Box} from '@rebass/grid'
import background from '../h1.svg'

import {
    themeGet,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    borderColor,
    borderRadius,
    borders,
    bottom,
    boxShadow,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    height,
    left,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    position,
    right,
    style,
    textAlign,
    top,
    width,
    buttonStyle,
    space,
    lineHeight
} from 'styled-system'
import {IoMdArrowBack as LeftArrow, IoMdArrowForward as RightArrow} from "react-icons/io";

export const hoverLinkStyles = css`
    cursor: pointer;
    
    &:hover {
      ${p => !p.active && {color: p.theme.colors.orange[0]}};
    }
    &:active {
      ${p => active(p)};
    }
    
    ${p => p.active && active(p)};
`

export const paragraph = css`
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size:  ${p => p.theme.fontSizes[10]}px;
  line-height: ${p => p.theme.lineHeight[10]}px;
`

const inputStyles = css`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    line-height: 36px;
    font-size: 24px;
    font-weight: 300;
    display: block;
    color: white;
    font-family: inherit;
    width: 100%;
    
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px ${p=>p.theme.colors.black[0]} inset !important;
        -webkit-text-fill-color: white !important;
    }
    
    &::placeholder {
      color: white;
    }
    
    ${space};
`

export const Input = styled.input`
  ${inputStyles};
`

export const Textarea = styled.textarea`
  ${inputStyles};
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: white;
    ${fontFamily}
    ${fontSize}
    ${space}    
`

export const Link1 = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white[0]};
    ${hoverLinkStyles};
    ${fontSize} 
`

export const Link2 = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white[0]};
    background-image: ${props => `linear-gradient(to right, ${props.theme.colors.gray[2]} 50%, transparent 50%)`};
    background-position: ${p => `0 ${themeGet('fontSizes.' + p.fontSize)(p) + 2}px`};
    background-repeat: repeat-x;
    background-size: 4px 1px;
    
    ${fontSize}
    ${lineHeight}
    ${space} 
`

export const NavLink = styled(withTheme(({theme, to, children, color, fontSize, fontFamily, className}) =>
    <StyledLink fontSize={fontSize}
                color={theme.colors.white[0]}
                to={to}
                className={className}
                fontFamily={fontFamily}
                getProps={({isCurrent}) => {
                    // the object returned here is passed to the
                    // anchor element's props
                    return {
                        style: {
                            color: isCurrent ? `${theme.colors.orange[1]}` : null,
                            fontWeight: isCurrent ? 700 : 300
                        }
                    };
                }}>
        {children}
    </StyledLink>))`
  ${hoverLinkStyles};
`

export const Subtitle = styled.p`
  font-size: ${p => `${p.theme.fontSizes[3]}px`};
  line-height: ${p => `${p.theme.lineHeight[3]}px`};
  font-weight: ${p => p.theme.fontWeights[0]};
  margin: 0;
  color: ${p => p.theme.colors.gray[2]};
  ${space}
  ${width}
`

export const H1 = styled.h1`
  line-height: ${p => `${p.theme.lineHeight[5]}px`};
  font-size: ${p => `${p.theme.fontSizes[5]}px`};
  margin: ${p => `0 0 ${p.theme.space[2]}px 0`};
  ${space};
  
  @media(min-width: ${p =>p.theme.breakpoints[0]}) {
    line-height: ${p => `${p.theme.lineHeight[7]}px`};
    font-size: ${p => `${p.theme.fontSizes[7]}px`};
  } 
`

export const h2Style = css`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size:  ${p => `${p.theme.fontSizes[12]}px`};
  line-height: ${p => `${p.theme.lineHeight[12]}px`};
  margin-bottom: 24px;
`;

export const H2 = styled.h2`
   ${h2Style};
   ${space};
`

export const P = styled.p`
   ${paragraph};
   ${space};
`

export const H4 = styled.h4`
  line-height: ${p => `${p.theme.lineHeight[4]}px`};
  font-size: ${p => `${p.theme.fontSizes[4]}px`};
  font-weight: ${p => p.theme.fontWeights[1]};
  margin: ${p => `0 0 ${p.theme.space[2]}px 0`};
  ${space};
`

export const H5 = styled.h5`
  line-height: ${p => `${p.theme.lineHeight[3]}px`};
  font-size: ${p => `${p.theme.fontSizes[3]}px`};
  font-weight: ${p => p.theme.fontWeights[2]};
  margin: ${p => `0 0 ${p.theme.space[1]}px 0`};
  ${space};
`

export const H3 = styled.h3`
   ${fontFamily}
   ${color}
   ${fontSize}
   ${textAlign}
`



export const Text = styled.span`
   ${fontSize}
   ${fontWeight}
   ${space}
`

export const description = css`
  font-size: ${p => `${p.theme.fontSizes[4]}px`};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => `${p.theme.lineHeight[4]}px`};
  color: white;
`

export const Description = styled(Text)`
    ${description}
    ${fontSize}
    ${lineHeight}
    ${space}
`

const filter = style({
    prop: 'filter'
});


export const FlexDiv = styled(Flex)(
    borders,
    borderColor,
    borderRadius,
    boxShadow,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    opacity,
    filter,
    position,
    top,
    bottom,
    left,
    right,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
)

export const withBackground = (background, w, h, after=false) => (WrappedComponent) => (strings, ...args) => {
    const position = css(strings, ...args);
    const width = `${w}px`;
    const height = `${h}px`;

    const bg = css`
      content:'';
      position: absolute;
      background-image: url(${background});
      background-position: left top;
      z-index: -1;
      width: ${width};
      height: ${height};
      background-repeat: no-repeat;
      ${position}
    `;

    const wrapper = after ? css`&:after {${bg}}`:css`&:before {${bg}}`

    return styled(WrappedComponent)`
      position: relative;
      ${wrapper}
    `;
}

export const H1WithBackground = withBackground(background, 241, 451)(H1)`
    left:-380px;
    top:15px;
`;

const active = p => ({
    color: p.theme.colors.orange[1]
})

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

const SL = styled(StyledLink)`
    ${hoverLinkStyles};
    font-weight: ${props => props.theme.fontWeights[0]};
    display: flex;
`

export const ArrowLink = ({to, left, children, className, getProps}) => <SL {...{className, to, getProps}}>
    {left && <ArrowLink_Left mr={1}/>}
    {children}
    {!left && <ArrowLink_Right ml={1}/>}
</SL>


export Button from './Button';
export Hexagon from './Hexagon';
export HexGrid from './HexGrid';
export Container from './Container';
export AspectBox from './AspectBox'
export ArrowButton, {ARROW_BUTTON_HEIGHT} from './ArrowButton'
export MenuButton from "./MenuButton";