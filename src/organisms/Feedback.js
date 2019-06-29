import React from 'react';
import {H1, Container, Subtitle, description} from '../atoms';
import styled from 'styled-components';
import {space} from 'styled-system';
import {Box} from '@rebass/grid'
import Reviews from "../components/Reviews";

const Em = styled.em`
  color: ${p => p.theme.colors.orange[1]};
  font-style: normal;
`;

const Description = styled.div`
  width: 70%;
  ${description};
  
  @media(min-width: ${p => p.theme.breakpoints[3]}) {
    margin-top: ${p => `${p.theme.space[4]}px`};
  }
`

const Feedback = ({className, reviews}) => <Container className={className} alignItems='top'>
		<Box width={[1, 1, 1, 1, 1 / 2]} pr={['0px', '0px', '0px', 8]}>
				<H1 mt={6}>Feedback from our customers</H1>
				<Subtitle mb={[3, 3, 3, 3, '48px']}>Development for Web, Mobile and IoT</Subtitle>
				<Description><Em>70% customers</Em> come back to us to implement new ideas</Description>
				<Description><Em>5 years</Em> average time worked with one client</Description>
		</Box>
		<Box width={[1, 1, 1, 1, 1 / 2]} mt={6}>
				<Reviews {...{reviews, className}}/>
		</Box>
</Container>;

export default styled(Feedback)`
  ${space}
`