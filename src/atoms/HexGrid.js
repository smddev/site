import React, {Children, cloneElement} from 'react';
import styled, {css} from 'styled-components';
import {HEX_PROP} from './Hexagon';

const PADDING = 8;

const HexGrid = ({children, direction, className, height, horizontal}) => {
    console.log(`hex height: ${height}`);
    const chldrn = Children.map(children, (child, index) => {
       return  cloneElement(child, {height})
    });
    return <div className={className}>{chldrn}</div>
}

const vertical = css`
  >:nth-child(even) {
    margin-left: ${p => `${p.height * HEX_PROP * 2 + PADDING}px`};
  }
  
  >:not(:last-child) {
    margin-bottom: ${p => `-${(p.height - PADDING)/2}px`};
  }
`

const horizontal = css`
  padding-bottom: ${p => `${(p.height + PADDING)/2}px`};
  
  >* {
    display: inline-block;
  }
  
  >:nth-child(even) {
    margin-bottom: ${p => `-${(p.height + PADDING)/2}px`};
  }
  
  >:not(:last-child) {
    margin-right: ${p => `${PADDING}px`};
  }
`

export default styled(HexGrid)`
  ${p=>p.horizontal ? horizontal : vertical}
`
