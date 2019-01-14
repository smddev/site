import React from 'react'
import {Link as RLink} from '@reach/router'
import styled, {withTheme} from 'styled-components'
import {color, fontFamily, fontSize, textAlign} from 'styled-system'

const StyledLink = styled(RLink)`
    text-decoration: none;
    ${fontFamily}
    ${color}
    ${fontSize}    
`
export const Link = withTheme(({theme, to, children, color, fontSize, fontFamily}) =>
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
