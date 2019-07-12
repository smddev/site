import React from 'react'
import styled, {css} from "styled-components";
import {StyledLink} from "../atoms";

const active = p => ({
  color: p.theme.colors.gray[0],
  'background-color': 'white'
});

export default styled(({className, item, linkPath, small}) => {
    return (small ?
        <div {...{className}}>{item.data.title}</div> :
        <StyledLink onClick={ () => { window.scrollTo(0, 0); }} to={`${linkPath}${item.data.slug}`} {...{className}}>
          {item.data.title}
        </StyledLink>
    )
  }
)`
  display: inline-block;
  background-color: ${p => p.small ? p.theme.colors.black[0] : p.theme.colors.gray[0]};
  border-radius: ${p => p.small || p.large ? `${p.theme.radii[0]}px` : 0};
  color: ${p => p.large ? p.theme.colors.gray[2] : 'white'};
  font-size: ${p => p.small ? `${p.theme.fontSizes[0]}px` : (p.large ?  `${p.theme.fontSizes[10]}px` : `${p.theme.fontSizes[3]}px`)};
  padding: ${p => p.small ? '5px 5px 3px 5px' : (p.large ? '17px 14px 11px 14px' : '4px 20px 0px')};
  text-transform: capitalize;
  font-weight: ${p => p.large ? 400 : 300};
  margin-right: 8px;
  margin-bottom: 8px;
  
  transition: color 0.8s;
  transition: background-color 0.8s;
  
  &:hover {
      ${p => !p.small && !p.active && {color: p.theme.colors.orange[0]}}
  }
  
  &:active {
      ${p => !p.small && active(p)}
  }
  
  ${p => !p.small && p.active && active(p)}
`

