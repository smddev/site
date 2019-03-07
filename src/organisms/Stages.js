import React from 'react';
import {H1, Container, HexGrid, Subtitle, Hexagon, description, withBackground} from '../atoms';
import {Box, Flex} from '@rebass/grid'
import {space} from 'styled-system';
import styled from 'styled-components';
import background from './../stages.svg';
import {responsive} from "../utils";

const Icon = styled.span`
  ${description};
  align-self: baseline;
  line-height: 16px;
  
  @media(min-width: ${p => p.theme.breakpoints[0]}) {
    line-height: 24px;
  }
`

const Stage = styled(Subtitle)`
  color: white;
  text-align: center;
  font-weight: 300;
  margin: 0 10px;
  
  @media(min-width: ${p => p.theme.breakpoints[0]}) {
    margin: 0 33px;
  }
`;

const backgrounds = ['orange.1', 'orange.2', 'orange.0', 'orange.1'];

const HG=responsive(({isXMobile, isMobile, isTablet, stages}) =>

    <HexGrid horizontal={!isTablet} height={isXMobile ? 132 : 206}>
    {stages.slice(0, 4).map((stage, index) => {
        return <Hexagon
            iconPos={'lt'}
            iconHeight={isXMobile ? 28 : 43}
            key={index}
            iconColor={'black.1'}
            icon={<Icon>{stage.data.title}</Icon>}
            bg={backgrounds[index]}>
            <Stage dangerouslySetInnerHTML={{ __html: stage.data.subtitle }}/>
        </Hexagon>
    })}
</HexGrid>)

const Stages = withBackground(background, 538, 433)(({stages, className}) => <Container
       flexWrap='wrap' className={className} alignItems='center'>
    <Box width={[1, 1, 1, 1, 1/4]}>
        <H1>Stages of work</H1>
    </Box>
    <Flex width={[1, 1, 1, 1, 3/4]}
          mt={[3, 5, 6, 6, '0px']}
          justifyContent={['center','center','center', 'center', 'flex-end']}>
        <HG {...{stages}}/>
    </Flex>
</Container>)`
    top: 10px;
    left: 53px;
`

export default styled(Stages)`
  ${space}
`