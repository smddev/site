import React from 'react';
import arrowImg from '../arrow-long-orange.svg'
import arrowImgHover from '../arrow-long-orange-hover.svg'
import arrowImgActive from '../arrow-long-orange-active.svg'
import styled from 'styled-components';

const WIDTH = '40px';
export const ARROW_BUTTON_HEIGHT = '20px';

export default styled.div`
  height: ${ARROW_BUTTON_HEIGHT};
  width:${WIDTH};
  background-image: url(${arrowImg});
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(${p=>p.left ? '180deg' : 0});
  cursor: pointer;
  
  &:hover {
    background-image: url(${arrowImgHover});
  }
  
  &:active {
    background-image: url(${arrowImgActive});
  }
  
`;