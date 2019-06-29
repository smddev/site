import React from 'react';
import styled from 'styled-components';
import {Box} from "@rebass/grid";
import {Magnifier} from '../icons'

const Container = styled(Box)`
	display: block;
  position: relative;
  img {
   	transition: opacity ease-in .2s;
  -moz-transition: opacity ease-in .2s;
  -webkit-transition: opacity ease-in .2s;
  -o-transition: opacity ease-in .2s;
 	}
 	&:hover{
 		img {
   		background-color: rgb(0, 0, 0);
   		opacity: 0.5;
 		}
  	.StyledMagnifier{
  		opacity: 1;
  		filter: alpha(opacity=100);
  	}
  }
`

const StyledMagnifier = styled(Magnifier)`
	opacity: 0;
  filter: alpha(opacity=0);
  position: absolute;
  left: 45%;
  top: 45%;
  transition: opacity ease-in .2s;
  -moz-transition: opacity ease-in .2s;
  -webkit-transition: opacity ease-in .2s;
  -o-transition: opacity ease-in .2s;
`

const Photo = ({photo, size, className}) => {
		return <a href={photo}
							target="_blank"
							rel="noopener noreferrer">
				<Container {...{className}}>
						<img
								width={size + '%'}
								src={photo}/>
						<StyledMagnifier className='StyledMagnifier'/>
				</Container>
		</a>
}

export default styled(Photo)`
	@media(min-width: ${p => p.theme.breakpoints[3]}) {
		margin-bottom: ${p=>p.mb}px;
  }
`;