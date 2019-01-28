import React from 'react'
import {Link} from '@reach/router'
import styled, {withTheme} from 'styled-components'
import {Flex} from '@rebass/grid'
import {
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
    buttonStyle
} from 'styled-system'

export const StyledLink = styled(Link)`
    text-decoration: none;
    ${fontFamily}
    ${color}
    ${fontSize}    
`
export const NavLink = withTheme(({theme, to, children, color, fontSize, fontFamily}) =>
    <StyledLink fontSize={fontSize}
                color={color}
                to={to}
                fontFamily={fontFamily}
                getProps={({isCurrent}) => {
                    // the object returned here is passed to the
                    // anchor element's props
                    return {
                        style: {
                            borderBottom: isCurrent ? `3px solid ${theme.colors.orange[2]}` : null
                        }
                    };
                }}>
        {children}
    </StyledLink>)

export const H1 = styled.h1`
   ${fontFamily}
   ${color}
   ${fontSize}
   ${textAlign}
`
export const H2 = styled.h2`
   ${fontFamily}
   ${color}
   ${fontSize}
   ${textAlign}
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


export const Button = styled.button`
  border-style: none;
  height: 64px;
  ${buttonStyle}
  ${fontSize}
      
`