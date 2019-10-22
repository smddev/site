import { Box } from "@rebass/grid";
import React from 'react';
import styled from 'styled-components';
import {space} from 'styled-system'
import { Magnifier } from '../icons';
import { Image } from "cloudinary-react";

const Container = styled.a`
  display: block;
  position: relative;
`;

const StyledMagnifier = styled(Magnifier)`
  opacity: 0;
  filter: alpha(opacity=0);
  position: absolute;
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  
  transition: opacity ease-in 0.2s;
   ${Container}:hover & {
      opacity: 1;
      filter: alpha(opacity=100);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  filter: grayscale(.4);
  object-position: ${p => p.position ? p.position : 'top'};
  object-fit: cover;
  height: 100%;
    
  transition: opacity ease-in 0.2s;
  
  ${Container}:hover & {
     background-color: rgb(0, 0, 0);
      opacity: 0.5;
  }
`

const Photo = ({ photo, className, position }) => {
  return <Container className={className} href={photo} target="_blank" rel="noopener noreferrer">
    <StyledImg
      position={position}
      src={photo}/>
    <StyledMagnifier />
  </Container>
};

export default styled(Photo)`
  ${space};
`;
