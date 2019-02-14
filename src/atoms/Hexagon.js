import React from 'react';
import styled, {css} from 'styled-components';
import {color, themeGet} from 'styled-system'

export const HEX_PROP = 0.57735;
const ICON_PROP = 0.27;
const commonStyle = css`
    content: "";
    position: absolute;
    height: 0;
    top:0;
    border-top: ${p=> `${p.height/2}px solid transparent`};
    border-bottom: ${p=> `${p.height/2}px solid transparent`};
`

const Hexagon = ({children, icon, iconHeight, height, className, iconColor}) => <div className={className}>
    <div className={`${className}__text`}>{children}</div>
    {icon &&
        <div className={`${className}__icon`}><StyledHex bg={iconColor || 'orange.1'} height={iconHeight || height*ICON_PROP}>
            {icon}
            </StyledHex>
        </div>
    }
</div>;

const StyledHex = styled(Hexagon)`
  position: relative;
  height: ${p=>`${p.height}px`}; 
  width: ${p=>`${p.height * HEX_PROP}px`};
  margin: ${p=>`0 ${p.height * HEX_PROP/2}px`};
  ${color};
  
  &:before {
    ${commonStyle};
    right: 100%;
    border-right: ${p=> `${p.height*HEX_PROP/2}px solid ${themeGet('colors.'+ p.bg)(p)}`};
  }
  
  &:after {
    ${commonStyle};
    left: 100%;
    border-left: ${p=> `${p.height*HEX_PROP/2}px solid ${themeGet('colors.'+ p.bg)(p)}`};
  }
  
  &__text {
    width: ${p=>`${p.height}px`};
    height: ${p=>`${p.height/2.5}px`};
    position: absolute;
    top: 50%;
    margin-top: ${p=>`-${p.height/5}px`};
    left: 50%;
    margin-left: ${p=>`-${p.height/2}px`};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  &__icon {
    position: absolute;
    right: ${p=> p.iconPos === 'rc' ? `-${p.height*HEX_PROP/2}px` : 'auto'};
    top: ${p=> p.iconPos === 'lt' ? 0 : p.iconPos === 'rc' ? '50%': 'auto'};
    bottom: ${p=> p.iconPos === 'lb' ? 0 : 'auto'};
    left: ${p=> p.iconPos === 'lt' || p.iconPos === 'lb' ? `-${(p.iconHeight || (p.height*ICON_PROP))*HEX_PROP/2}px` : 'auto'};
    margin-top: ${p => p.iconPos === 'rc' ? `-${(p.iconHeight || (p.height*ICON_PROP))/2}px` : 'default'};
    z-index: 1;
  }
`

export default StyledHex;