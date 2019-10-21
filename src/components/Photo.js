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
  @media (max-width: ${p=>p.theme.breakpoints[1]}){
  	top: 30%;
  }
  transition: opacity ease-in 0.2s;
   ${Container}:hover & {
      opacity: 1;
      filter: alpha(opacity=100);
  }
`;

const StyledImg = styled(Image)`
  width: 100%;
  object-position: center;
  object-fit: cover;
  height: 100%;
    
  transition: opacity ease-in 0.2s;
  
  ${Container}:hover & {
     background-color: rgb(0, 0, 0);
      opacity: 0.5;
  }
`

const Photo = ({ photo, className }) => {
  return <Container className={className} href={photo} target="_blank" rel="noopener noreferrer">
    <StyledImg
      publicId={`site/group-photos/${photo}`}/>
    <StyledMagnifier />
  </Container>
};

export default styled(Photo)`
  ${space};
`;
