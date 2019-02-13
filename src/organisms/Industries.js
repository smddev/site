import React from 'react';
import {H1, Subtitle, Container} from '../atoms';
import {IndustryList} from '../components';
import styled from 'styled-components';
import {space} from 'styled-system';

const Industries = ({industries, className}) => <div className={className}>
    <H1>Industry sectors</H1>
    <Subtitle>We create software taking into account industry features</Subtitle>
    <Container justifyContent='center'>
        <IndustryList industries={industries}/>
    </Container>
</div>

export default styled(Industries)`
  text-align: center;
  ${space}
`