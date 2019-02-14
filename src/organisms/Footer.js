import React, {Fragment} from 'react';
import {PhoneLink} from '../components';
import {Button, H1, Input, Subtitle, Container} from '../atoms';
import styled from 'styled-components';
import {Flex, Box} from '@rebass/grid';
import {space} from 'styled-system';
import background from '../calculateCost.svg'

const Description = styled(Subtitle)`width: 90%`;
const Email = styled(Input)`width: 100%`;

const CalculateCost = styled(({className}) => <Container {...{className}}>
    <Box width={1/2} pr={'40px'}>
        <H1 mt={'104px'}>Calculate the cost of the project</H1>
        <Description>The price is calculated individually depending on the complexity,
            volume and terms of work. Usually the project involves an analyst, designer, developers,
            testers and project Manager.
        </Description>
    </Box>
    <Box width={1/2} pl={'120px'}>
        <Email mt={'136px'} type={'email'} placeholder={'Your email'} />
        <Button mt={'48px'}>Calculate Cost</Button>
    </Box>
</Container>)`
  position: relative;
  height: 415px;
  
  &:before {
    content: '';
    position: absolute;
    width: 1957px;
    height: 415px;
    z-index: -1;
    top: 0;
    left: 50%;
    margin-left: calc(-1957px/2);
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: left top;
  }
`

const FooterContacts = styled(({className}) => <Container {...{className}}>
    <PhoneLink big/>
</Container>)`
  padding-top: 40px;
  padding-bottom: 40px;
`


export default styled(({noForm, className}) => <div {...{className}}>
    {!noForm && <CalculateCost/>}
    <FooterContacts/>
</div>)`
  ${space}
`