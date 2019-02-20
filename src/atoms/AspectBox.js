import React, {Fragment} from 'react'
import styled from 'styled-components';
import {space} from 'styled-system';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const AspectBox = ({children, ration, className}) => <div {...{className}}>
    <Wrapper>{children}</Wrapper>
</div>

export default styled(AspectBox)`
  position: relative;
  height: 0;
  padding-top: ${p => p.ratio * 100}%;
`