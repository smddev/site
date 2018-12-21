import React from 'react'
import {Link} from "react-static";
import styled, {withTheme} from 'styled-components'
import {color, fontSize, themeGet} from 'styled-system'

const StyledLink = styled(Link)`
    font-family: ${themeGet('fonts.0')};
    text-decoration: none;
    ${color}
    ${fontSize}    
`

export const NavLink = withTheme(({theme, to, children}) =>
    <StyledLink to={to}
                activeStyle={{'borderBottom': `3px solid ${theme.colors.orange[2]}`}}>
        {children}
    </StyledLink>)

