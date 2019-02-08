import React, {Children, cloneElement} from 'react';
import styled from 'styled-components';
import {HEX_PROP} from './Hexagon';

const PADDING = 8;

const HexGrid = ({children, direction, className, height}) => {
    const chldrn = Children.map(children, (child, index) => {
       return  cloneElement(child, {height})
    });
    return <div className={className}>{chldrn}</div>
}


export default styled(HexGrid)`
  >:nth-child(even) {
    margin-left: ${p => `${p.height * HEX_PROP * 2 + PADDING}px`};
  }
  
  >:not(:last-child) {
    margin-bottom: ${p => `-${(p.height - PADDING)/2}px`};
  }
`
