import React from 'react'
import {Link as RSLink} from "react-static";
import styled, {withTheme} from 'styled-components'
import {color, fontSize, themeGet} from 'styled-system'

const StyledLink = styled(RSLink)`
    font-family: ${themeGet('fonts.1')};
    text-decoration: none;
    ${color}
    ${fontSize}    
`
export const Link = withTheme(({theme, to, children, color, bg, fontSize}) =>
    <StyledLink fontSize={fontSize}
                color={color}
                bg={bg}
                to={to}
                activeStyle={{'borderBottom': `3px solid ${theme.colors.orange[2]}`}}>
        {children}
    </StyledLink>)

export const H1 = styled.h1`
   font-family: ${themeGet('fonts.0')};
   ${color}
   ${fontSize}
`

export const P = styled.p`
  font-family: ${themeGet('fonts.0')};
   ${color}
   ${fontSize}
`
