import React from 'react';
import {H1, Subtitle, Container} from '../atoms';
import {PortfolioList} from '../components';
import styled from 'styled-components';
import {space} from 'styled-system';

const IndustryList = (props) =>
    <PortfolioList mt={'60px'} mx={'50px'} items={props.industries} filterBy='industry' {...props}/>

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