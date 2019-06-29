import React from 'react';
import {Fact, Carousel} from '../components';
import {space} from 'styled-system';
import styled from 'styled-components';

const Facts = ({facts, pStyles, className, carousel}) =>
    <Carousel width={320} height={225} {...{pStyles, className, carousel}} alignItems='center'>
    {facts.slice(0, 3).map((fact, key) => <div {...{key}}>
        <Fact {...{fact}}/>
    </div>)}
</Carousel>

export default styled(Facts)`
  ${space}
`