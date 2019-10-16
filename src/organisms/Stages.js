import React from 'react';
import {H1, Container, Subtitle, description, withBackground, StagesGrid} from '../atoms';
import {Box, Flex} from '@rebass/grid'
import {space} from 'styled-system';
import styled, {withTheme} from 'styled-components';
import background from './../stages.svg';
import {StagesHex, StagesHexIcon} from "../atoms/Hexagon";
import {CONTAINER_WIDTH} from "../atoms/Container";

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

const backgrounds = ['1', '2', '0', '1'];

const ICN = ({color, title}) => ({}) => <StagesHexIcon color={color}>
    <Icon>{title}</Icon>
</StagesHexIcon>

const HG=withTheme(({theme,stages}) =>

    <StagesGrid>
    {stages.slice(0, 4).map((stage, index) => {
        return <StagesHex
            iconPos={'lt'}
            key={index}
            icon={ICN({color:`${theme.colors.black[1]}`, title:stage.data.title})}
            color={theme.colors.orange[backgrounds[index]]}>
            <Stage dangerouslySetInnerHTML={{ __html: stage.data.subtitle }}/>
        </StagesHex>
    })}
</StagesGrid>)

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
  max-width: ${CONTAINER_WIDTH};
  margin: 0 auto;
  ${space}
`
