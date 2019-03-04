import React from 'react';
import {H1, Container, HexGrid, Subtitle, Hexagon, description, withBackground} from '../atoms';
import {Box, Flex} from '@rebass/grid'
import {space} from 'styled-system';
import styled from 'styled-components';
import background from './../stages.svg'

const Icon = styled.span`
  ${description};
  align-self: baseline;
  line-height: 24px;
`

const Stage = styled(Subtitle)`
  color: white;
  text-align: center;
  margin: 0 33px;
  font-weight: 300;
`;

const backgrounds = ['orange.1', 'orange.2', 'orange.0', 'orange.1'];

const Stages = withBackground(background, 538, 433)(({stages, className}) => <Container className={className} alignItems='center'>
    <Box width={1/4}>
        <H1>Stages of work</H1>
    </Box>
    <Flex width={3/4} justifyContent='flex-end'>
        <HexGrid horizontal height={206}>
            {stages.slice(0, 4).map((stage, index) => {
                return <Hexagon
                        iconPos={'lt'}
                        iconHeight={43}
                        key={index}
                        iconColor={'black.1'}
                        icon={<Icon>{stage.data.title}</Icon>}
                        bg={backgrounds[index]}>
                    <Stage dangerouslySetInnerHTML={{ __html: stage.data.subtitle }}/>
                </Hexagon>
            })}
        </HexGrid>
    </Flex>
</Container>)`
    top: 10px;
    left: 53px;
`

export default styled(Stages)`
  padding-bottom: 120px;
  ${space}
`