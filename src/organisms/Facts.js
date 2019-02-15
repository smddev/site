import React from 'react';
import {Container} from '../atoms';
import {Box} from '@rebass/grid'
import {Fact} from '../components';
import {space} from 'styled-system';
import styled from 'styled-components';

const Facts = ({facts, className}) => <Container className={className} alignItems='center'>
    {facts.slice(0, 3).map((fact, key) => {
        return <Fact {...{key, fact}}/>
    })}
</Container>

export default styled(Facts)`
  justify-content: space-between;
  ${space}
`