import React from 'react';
import {H1, Subtitle, Container, withBackground} from '../atoms';
import {IndustryList} from '../components';
import styled from 'styled-components';
import {space} from 'styled-system';
import bgLeft from '../industriesLeft.svg'
import bgRight from '../industriesRight.svg'
import {CONTAINER_WIDTH} from "../atoms/Container";
import { FormattedMessage } from 'react-intl'

const Industries = withBackground(bgRight, 274, 343, true)(
        withBackground(bgLeft, 274, 343)(
            ({industries, className}) => <div className={className}>
    <H1><FormattedMessage id='message.industry.sectors'/></H1>
    <Subtitle><FormattedMessage id='message.industry.create'/></Subtitle>
    <Container mt={7} justifyContent='center'>
        <IndustryList industries={industries}/>
    </Container>
</div>)`
    left: -350px;
    top: 60px;
`)`
    right: -350px;
    top: 200px;
`

export default styled(Industries)`
  text-align: center;
  max-width: ${CONTAINER_WIDTH};
  margin: 0 auto;
  ${space}
`