import { Box } from "@rebass/grid";
import React from 'react';
import styled from 'styled-components';
import { Magnifier } from '../icons';
import { Image } from "cloudinary-react";

const Container = styled(Box)`
  display: block;
  position: relative;
  @media (max-width: ${p=>p.theme.breakpoints[1]}){
  	overflow: hidden;
  }
`;

const StyledMagnifier = styled(Magnifier)`
  opacity: 0;
  filter: alpha(opacity=0);
  position: absolute;
  left: 45%;
  top: 40%;
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
  height:320px;
  transition: opacity ease-in 0.2s;
  margin: -75px 0 0 -100px;
  @media (min-width: 681px){
	  width:100%;
	  height:auto;
	  margin: auto;
  }
  ${Container}:hover & {
     background-color: rgb(0, 0, 0);
      opacity: 0.5;
  }
`

const Photo = ({ photo, height, className }) => {
  return (
    <a href={photo} target="_blank" rel="noopener noreferrer">
      <Container {...{ className }}>
        <div width="50%" >
          <StyledImg
            publicId={`site/group-photos/${photo}`}
            gravity="face"
            crop="fill"/>
        </div>
        <StyledMagnifier />
      </Container>
    </a>
  );
};

export default styled(Photo)`

`;
