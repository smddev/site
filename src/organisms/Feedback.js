import React from 'react';
import {H1, Container, Subtitle, description} from '../atoms';
import styled from 'styled-components';
import {space} from 'styled-system';
import quote from '../quote.svg'
import {Box} from '@rebass/grid'
import background from '../feedback.svg'

const Em = styled.em`
  color: ${p => p.theme.colors.orange[1]};
  font-style: normal;
`;

const Description = styled.div`
  margin-top: ${p => `${p.theme.space[4]}px`};
  width: 70%;
  ${description}
`

const FeedbackList = styled.div`
  width: 100%;
  min-height: 170px;
  background-image: url(${quote});
  background-position: 15px top;
  background-repeat: no-repeat;
`

const Feedback = ({className}) => <Container className={className} alignItems='top'>
    <Box width={1/2} pr={8}>
        <H1 mt={6}>Feedback from our customers</H1>
        <Subtitle mb={'48px'}>Development for Web, Mobile and IoT</Subtitle>
        <Description><Em>70% customers</Em> come back to us to implement new ideas</Description>
        <Description><Em>5 years</Em> average time worked with one client</Description>
    </Box>
    <Box width={1/2}>
        <FeedbackList/>
    </Box>
</Container>

export default styled(Feedback)`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 1133px;
    height: 686px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: left top;
    left: -230px;
    top: 247px;
  }
  ${space}
`