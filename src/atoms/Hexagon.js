import React from 'react';
import styled from 'styled-components';
import {color} from 'styled-system';

export const HEX_PROP = 0.57735;
const ICON_PROP = 0.27;

const Hexagon = ({children, className, icon:Icon}) => <div className={className}>
    <div className={`${className}__text`}>{children}</div>
    {Icon &&
        <div className={`${className}__icon`}>
            {<Icon/>}
        </div>
    }
</div>;

const commonHexStyles = ({height}) =>`
    content: "";
    position: absolute;
    height: 0;
    top:0;
    border-top: ${height/2}px solid transparent;
    border-bottom: ${height/2}px solid transparent;
`

const hexStyles = (props, height, iconHeight) => `
  position: relative;
  height: ${height}px; 
  width: ${height * HEX_PROP}px;
  margin: 0 ${height * HEX_PROP/2}px;
  background-color: ${props.color};
  
  &:before {
    ${commonHexStyles({height})}
    right: 100%;
    border-right: ${height*HEX_PROP/2}px solid ${props.color};
  }
  
  &:after {
    ${commonHexStyles({height})}
    left: 100%;
    border-left: ${height*HEX_PROP/2}px solid ${props.color};
  }
  
  &__text {
    width: ${height}px;
    height: ${height/2.5}px;
    position: absolute;
    top: 50%;
    margin-top: -${height/5}px;
    left: 50%;
    margin-left: -${height/2}px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  &__icon {
    position: absolute;
    right: ${props.iconPos === 'rc' ? `-${height*HEX_PROP/2}px` : 'auto'};
    top: ${props.iconPos === 'lt' ? 0 : props.iconPos === 'rc' ? '50%': 'auto'};
    bottom: ${props.iconPos === 'lb' ? 0 : 'auto'};
    left: ${props.iconPos === 'lt' || props.iconPos === 'lb' ? `-${(iconHeight || (height*ICON_PROP))*HEX_PROP/2}px` : 'auto'};
    margin-top: ${props.iconPos === 'rc' ? `-${(iconHeight || (height*ICON_PROP))/2}px` : 'default'};
    z-index: 1;
  }
`

export const ServicesHex = styled(Hexagon)`
  ${p => hexStyles(p, 128)}
    
  @media (min-width: ${p => p.theme.breakpoints[0]}) {
    ${p => hexStyles(p, 200)}
  }
  
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    ${p => hexStyles(p, 274)}
  }
`;

export const ServicesHexIcon = styled(Hexagon)`
  ${p => hexStyles(p, 128*ICON_PROP)}
    
  @media (min-width: ${p => p.theme.breakpoints[0]}) {
    ${p => hexStyles(p, 200*ICON_PROP)}
  }
  
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    ${p => hexStyles(p, 274*ICON_PROP)}
  }
`;

export const StagesHex = styled(Hexagon)`
    ${p => hexStyles(p, 132, 28)}
    
    @media (min-width: ${p => p.theme.breakpoints[0]}) {
    ${p => hexStyles(p, 206, 43)}
  }
`

export const StagesHexIcon = styled(Hexagon)`
    ${p => hexStyles(p,28)}
    
    @media (min-width: ${p => p.theme.breakpoints[0]}) {
    ${p => hexStyles(p,43)}
  }
`

export const IconHex = styled(Hexagon)`
    ${p => hexStyles(p,40)}
  }
`

export const LoadingHex = styled(Hexagon)`
  ${p => hexStyles(p,160)}
  position: absolute;
  z-index: 0;
  animation: spin infinite 0.8s ease-in-out;
  pointer-events: none;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`