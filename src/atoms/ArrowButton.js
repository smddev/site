import React from 'react';
import {Arrow} from '../icons'
import styled, {css} from 'styled-components';

export const ARROW_BUTTON_HEIGHT = '20px';

const yellowSvgStyles = css`
  cursor: pointer;
  
  transition: fill .5s;
  
  fill: ${p => p.theme.colors.orange[1]};
  &:hover {
    fill: ${p => p.theme.colors.orange[2]};
  }
  &:active {
    fill: ${p => p.theme.colors.orange[3]};
  }
`

export default styled(Arrow)`
  display: block;
  transform: rotate(${p => p.left ? '180deg' : (p.up ? '270deg' : (p.down ? '90deg' : 0))});  
  ${yellowSvgStyles}
`;