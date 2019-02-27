import React from 'react';
import styled from 'styled-components';
import {space} from 'styled-system';
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

export default withBackground(null, 340, 220)(styled(Fact)`
  padding: 60px 30px;
  width:240px;
  box-sizing: border-box;
`)`
    background-image: ${p => `url('${getImage(p.fact.data.background)}')`};
    top:5px;
    left:-50px;
    
`