import React from 'react';
import {H1, Container, Subtitle, description, withBackground} from '../atoms';
import styled from 'styled-components';
import {space} from 'styled-system';
import quote from '../quote.svg'
import {Box} from '@rebass/grid'

const Em = styled.em`
  color: ${p => p.theme.colors.orange[1]};
  font-style: normal;
`;

const Description = styled.div`
  margin-top: ${p => `${p.theme.space[4]}px`};
  width: 70%;
  ${description}
`

const FeedbackList = withBackground(quote, 240, 160)(styled.div`
  width: 100%;
  min-height: 170px;
`)`
    left: 15px;
    top: -100px;
`

const ClutchWidget = styled.div`
  width: 290px;
  margin: 100px auto 0 auto;
`

const Feedback = ({className}) => <Container className={className} alignItems='top'>
    <Box width={1/2} pr={8}>
        <H1 mt={6}>Feedback from our customers</H1>
        <Subtitle mb={'48px'}>Development for Web, Mobile and IoT</Subtitle>
        <Description><Em>70% customers</Em> come back to us to implement new ideas</Description>
        <Description><Em>5 years</Em> average time worked with one client</Description>
    </Box>
    <Box width={1/2}>
        <FeedbackList>
            <ClutchWidget className="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="3" data-height="350"
                 data-clutchcompany-id="627124"></ClutchWidget>
        </FeedbackList>
    </Box>
</Container>

export default styled(Feedback)`
  ${space}
`