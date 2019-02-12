import React from 'react';
import styled from 'styled-components';
import {space} from 'styled-system';
import {H5, Subtitle} from "../atoms";

const Fact = ({fact, className}) => {


    return <div className={className} >
        <H5>{fact.data.title}</H5>
        <Subtitle>{fact.data.subtitle}</Subtitle>
    </div>
}

const getImage = (name) => {
  return require(`../${name}.svg`)
}

export default styled(Fact)`
  background-repeat: no-repeat;
  background-image: ${p => `url('${getImage(p.fact.data.background)}')`};
  background-position: top left;
  box-sizing: border-box;
  width: 340px;
  height:220px;
  padding: 60px 40px 60px 80px;
  ${space}
`