import React from 'react';
import {Box, Flex} from "@rebass/grid";
import styled from 'styled-components';

const Text = styled.div`
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: ${p => p.theme.lineHeight[3]}px;
  font-weight: ${p => p.theme.fontWeights[0]};
  color: white;

	@media(max-width: 400px) {
  	font-size: 14px;
  }
  
  @media(min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 20px;
    line-height: 30px;
  }
`

const ItalicText = styled(Text)`
	font-style: italic;
	min-height: 300px;
`

const GreyText = styled(Text)`
	color: grey;

	@media(min-width: ${p => p.theme.breakpoints[2]}) {
	  font-size: ${p => p.theme.fontSizes[3]}px;
	}
`

const A = styled.a`
  	text-decoration: none;
`

const Review = ({review, className, CarouselCSS}) => {
		return <div {...{className}} >
				<ItalicText>{review.data.review}</ItalicText>
				<Flex width={1} mb={3}>
						<Box width={1 / 2}>
								<A href={review.data.link}
									 target="_blank"
									 rel="noopener noreferrer">
										<img src={review.data.icon}/>
								</A>
						</Box>
						<Box width={1 / 2}>
								<A href={review.data.link}
									 target="_blank"
									 rel="noopener noreferrer">
										<Text>{review.data.reviewer}</Text>
										<GreyText>{review.data.position}</GreyText>
								</A>
						</Box>
				</Flex>
		</div>
}

export default styled(Review)`
	height:400px;
 	width:200px;
  font-size: 14px;
 	@media(min-width: 400px) {
		height:400px;
 		width:290px;
	}
 	@media(min-width: ${p => p.theme.breakpoints[0]}) {
		height:400px;
 		width:370px;
	}
	@media(min-width: ${p => p.theme.breakpoints[1]}) {
		height:400px;
 		width:480px;
	}
`