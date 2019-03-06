import React from 'react';
import {Container} from '../atoms';
import {Box} from '@rebass/grid'
import {Fact, Carousel} from '.';
import {space} from 'styled-system';
import styled from 'styled-components';

const Facts = ({facts, pStyles, className, carousel}) =>
    <Carousel width={320} height={225} {...{pStyles, className, carousel}} alignItems='center'>
    {facts.slice(0, 3).map((fact, key) => <Fact {...{key, fact}}/>)}
</Carousel>

export default styled(Facts)`
  ${space}
`