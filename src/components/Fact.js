import React from 'react';
import styled from 'styled-components';
import {H4, Subtitle, withBackground} from "../atoms";

const Fact = ({fact, className}) => {
    return <div {...{className}} >
        <H4>{fact.data.title}</H4>
        <Subtitle>{fact.data.subtitle}</Subtitle>
    </div>
}

const getImage = (name) => {
  return require(`../${name}.svg`)
}

export default withBackground(null, 320, 220)(styled(Fact)`
  padding: 60px 80px;
  width:320px;
  box-sizing: border-box;
  margin-bottom: 40px;
`)`
    background-image: ${p => `url('${getImage(p.fact.data.background)}')`};
    top:5px;
    left:0px;
    
`