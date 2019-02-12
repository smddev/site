import React from 'react';
import Container from '../atoms/Container';
import {Box} from '@rebass/grid'
import {Fact} from '../components';
import {space} from 'styled-system';
import styled from 'styled-components';

const margins = [['ml', '-50px'], ['ml', '0'], ['mr', '-30px']];

const Facts = ({facts, className}) => <Container className={className} alignItems='center'>
    {facts.slice(0, 3).map((fact, index) => {
        const [margin, value] = margins[index];
        const props = {[margin] : value};

        return <Fact key={index} fact={fact} {...props}/>
    })}
</Container>

export default styled(Facts)`
  justify-content: space-between;
  ${space}
`