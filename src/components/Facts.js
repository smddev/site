import React, {Fragment} from 'react';
import Fact from '../components/Fact'
import Carousel from '../components/Carousel'
import {space} from 'styled-system';
import styled, {css} from 'styled-components';


const commonStyles = css`
  width: 320px;
  margin: 140px auto 0;
  @media(min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
  }
`

const pStyles = css`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  @media(min-width: ${p => p.theme.breakpoints[3]}) {
    justify-content: space-between;
  }
`;

const Facts = ({facts, mobile = true, className}) => <Carousel className={className} width={320} height={225}
      {...{pStyles, carousel:mobile}} alignItems='center'>
  {facts.slice(0, 3).map((fact, key) => <div {...{key}}>
    <Fact {...{fact}}/>
  </div>)}
</Carousel>

const MobileFacts = styled(Facts)`
  ${commonStyles};
  @media(min-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`

const DesktopFacts = styled(Facts)`
  ${commonStyles};
  @media(max-width: ${p => p.theme.brkpnts[1] - 1}px) {
    display: none;
  }
`

export const CombinedFacts = ({facts}) => <Fragment>
    <MobileFacts {...{facts}}/>
    <DesktopFacts {...{facts, mobile: false}}/>
  </Fragment>


export const FactsCarousel = ({facts, className}) => <Facts {...{facts, className}}/>