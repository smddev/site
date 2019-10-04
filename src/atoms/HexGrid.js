import React, {Children, cloneElement} from 'react';
import styled, {css} from 'styled-components';
import {HEX_PROP} from './Hexagon';

const PADDING = 8;

const HexGrid = ({children, direction, className, height}) => {
    const chldrn = Children.map(children, (child, index) => {
       return  cloneElement(child, {height})
    });
    return <div className={className}>{chldrn}</div>
}

const vertical = (height) => `
  >:nth-child(even) {
    margin-left: ${height * HEX_PROP * 2 + PADDING}px;
  }
  
  >:not(:last-child) {
    margin-bottom: -${(height - PADDING)/2}px;
  }
`

const horizontal = (height) => `
  padding-bottom: ${(height + PADDING)/2}px;
  
  >* {
    display: inline-block;
  }
  
  >:nth-child(even) {
    margin-bottom: -${(height + PADDING)/2}px !important;
    margin-left:0;
  }
  
  >:not(:last-child) {
    margin-right: ${PADDING}px;
    margin-bottom: unset;
  }
`

export const StagesGrid = styled(HexGrid)`
  @media (max-width: ${p=>p.theme.breakpoints[0] - 1}) {
    ${vertical(132)};
  }
  
  @media (min-width: ${p=>p.theme.breakpoints[0]}) and (max-width: ${p=>p.theme.breakpoints[2] - 1}){
    ${vertical(206)}
  }
  
  @media (min-width: ${p=>p.theme.breakpoints[2]}) {
    ${horizontal(206)}
  }
`

export const ServicesGrid = styled(HexGrid)`
  ${vertical(128)};
  
  @media (min-width: ${p=>p.theme.breakpoints[0]}) {
    ${vertical(200)}
  }
  
  @media (min-width: ${p=>p.theme.breakpoints[1]}) {
    ${vertical(274)}
  }
`
