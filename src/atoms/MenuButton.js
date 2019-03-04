import React from 'react';
import styled, {css} from "styled-components";
import {space} from "styled-system";

const bar = css`
  width: 25px;
  height: 2px;
  background-color: ${p => p.theme.colors.white[0]};
  margin: 6px 0;
  transition: 0.4s;
`

const Bar1 = styled.div`
  ${bar};
  ${p=> !p.collapsed && {transform: 'rotate(-45deg) translate(-6px, 6px)'}};
`

const Bar2 = styled.div`
  ${bar};
  opacity: ${p => !p.collapsed ? 0 : 1}
`

const Bar3 = styled.div`
  ${bar};
  ${p=> !p.collapsed && {transform: 'rotate(45deg) translate(-5px, -6px)'}};
`

const MenuButton = ({collapsed, className, onClick}) => <div {...{className, onClick}}>
    <Bar1 {...{collapsed}}/>
    <Bar2 {...{collapsed}}/>
    <Bar3 {...{collapsed}}/>
</div>

export default styled(MenuButton)`
  cursor: pointer;
`