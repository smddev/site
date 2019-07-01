import { Box } from "@rebass/grid";
import React from 'react';
import styled from 'styled-components';
import { Magnifier } from '../icons';

const Container = styled(Box)`
  display: block;
  position: relative;
  @media (max-width: ${p=>p.theme.breakpoints[1]}){
  	overflow: hidden;
  }
  img {
    transition: opacity ease-in 0.2s;
    -moz-transition: opacity ease-in 0.2s;
    -webkit-transition: opacity ease-in 0.2s;
    -o-transition: opacity ease-in 0.2s;
  }
  &:hover {
    img {
      background-color: rgb(0, 0, 0);
      opacity: 0.5;
    }
    .StyledMagnifier {
      opacity: 1;
      filter: alpha(opacity=100);
    }
  }
`;

const StyledMagnifier = styled(Magnifier)`
  opacity: 0;
  filter: alpha(opacity=0);
  position: absolute;
  left: 45%;
  top: 45%;
  transition: opacity ease-in 0.2s;
  -moz-transition: opacity ease-in 0.2s;
  -webkit-transition: opacity ease-in 0.2s;
  -o-transition: opacity ease-in 0.2s;
`;

const StyledImg = styled.img`
  height:320px;
  @media (min-width: ${p=>p.theme.breakpoints[1]}){
	width:100%;
	height:auto;
  }
`

const Photo = ({ photo, height, className }) => {
  return (
    <a href={photo} target="_blank" rel="noopener noreferrer">
      <Container {...{ className }}>
        <div width="50%" >
          <StyledImg src={photo}/>
        </div>
        <StyledMagnifier className="StyledMagnifier" />
      </Container>
    </a>
  );
};

export default styled(Photo)`
  @media (min-width: ${p => p.theme.breakpoints[3]}) {
    margin-bottom: ${p => p.mb}px;
  }
`;
