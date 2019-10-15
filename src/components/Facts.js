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


const MobileCarousel = styled(Carousel)`
  ${commonStyles};
  @media(min-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`

const DesktopCarousel = styled(Carousel)`
  ${commonStyles};
  @media(max-width: ${p => p.theme.brkpnts[1] - 1}px) {
    display: none;
  }
`

const Facts = ({facts}) => <Fragment>
    <MobileCarousel width={320} height={225} {...{pStyles, carousel:true}} alignItems='center'>
      {facts.slice(0, 3).map((fact, key) => <div {...{key}}>
        <Fact {...{fact}}/>
      </div>)}
    </MobileCarousel>
    <DesktopCarousel width={320} height={225} {...{pStyles, carousel:false}} alignItems='center'>
      {facts.slice(0, 3).map((fact, key) => <div {...{key}}>
        <Fact {...{fact}}/>
      </div>)}
    </DesktopCarousel>
  </Fragment>

export default Facts;
