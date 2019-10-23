import { Box } from "@rebass/grid";
import React from 'react';
import styled from 'styled-components';
import {space} from 'styled-system'
import { Magnifier } from '../icons';
import { Image, Transformation } from "cloudinary-react";

const Container = styled.div`
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

const StyledImg = styled(Image)`
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

const Photo = ({ photo, className, position, onClick }) => {
  return <Container className={className} onClick={onClick(photo)}>
    <StyledImg
      position={position}
      publicId={`site/group-photos/${photo}`}>
      <Transformation width="784" height="470" crop="fill" gravity="faces"/>
    </StyledImg>
    <StyledMagnifier />
  </Container>
};

export default styled(Photo)`
  ${space};
`;
