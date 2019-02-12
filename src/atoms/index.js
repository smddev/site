import React from 'react'
import {Link} from '@reach/router'
import styled, {withTheme} from 'styled-components'
import {Flex, Box} from '@rebass/grid'
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


export Button from './Button';
export Hexagon from './Hexagon';
export HexGrid from './HexGrid';

export const StyledLink = styled(Link)`
    text-decoration: none;
    ${fontFamily}
    ${color}
    ${fontSize}    
`

export const Link1 = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white[0]};
    ${fontSize} 
`

export const Link2 = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white[0]};
    background-image: ${props => `linear-gradient(to right, ${props.theme.colors.gray[2]} 50%, transparent 50%)`};
    background-position: ${p => `0 ${themeGet('fontSizes.' + p.fontSize)(p) + 4}px`};
    background-repeat: repeat-x;
    background-size: 4px 1px;
    
    ${fontSize}
    ${lineHeight}
    ${space} 
`

export const NavLink = withTheme(({theme, to, children, color, fontSize, fontFamily, className}) =>
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
    </StyledLink>)

export const Subtitle = styled.p`
  font-size: ${p => `${p.theme.fontSizes[2]}px`};
  line-height: ${p => `${p.theme.lineHeight[2]}px`};
  font-weight: ${p => p.theme.fontWeights[0]};
  margin: 0;
  color: ${p => p.theme.colors.gray[2]};
  ${space}
`

export const H1 = styled.h1`
  line-height: ${p => `${p.theme.lineHeight[6]}px`};
  font-size: ${p => `${p.theme.fontSizes[6]}px`};
  margin: ${p => `0 0 ${p.theme.space[2]}px 0`};
`
export const H2 = styled.h2`
   ${fontFamily}
   ${color}
   ${fontSize}
   ${textAlign}
`

export const H5 = styled.h5`
  line-height: ${p => `${p.theme.lineHeight[3]}px`};
  font-size: ${p => `${p.theme.fontSizes[3]}px`};
  font-weight: ${p => p.theme.fontWeights[1]};
  margin: ${p => `0 0 ${p.theme.space[2]}px 0`};
  ${space};
`

export const H3 = styled.h3`
   ${fontFamily}
   ${color}
   ${fontSize}
   ${textAlign}
`

export const P = styled.p`
   ${fontFamily}
   ${color}
   ${fontSize}
   ${textAlign}
   ${fontWeight}
   ${space}
`

export const Text = styled.span`
   ${fontSize}
   ${fontWeight}
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

export const Container = ({props, children}) =>
    <Box {...props} px={[0, 0, 7]} py={2}>
        {children}
    </Box>

