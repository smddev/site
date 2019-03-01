import React from 'react';
import Container from "../atoms/Container";
import {Box} from "@rebass/grid";
import {H1, P, Button, Subtitle, description, withBackground} from "../atoms";
import {Markdown, ServiceList} from '../components';
import styled from 'styled-components';
import HexServiceList from "../components/HexServiceList";
import {space} from 'styled-system';
import background from '../h1.svg'


const Description = styled(Markdown)`
  ${description};
  width: 90%;
`

const Services =  withBackground(background, 241, 451)(({page, services, className}) => <Container className={className} alignItems='center'>
    <Box width={1 / 2} pr={5}>
        <H1 dangerouslySetInnerHTML={{ __html: page.data.title }}/>
        <Subtitle mb={5}>{page.data.subtitle}</Subtitle>
        <Description source={page.content} escapeHtml={false}/>
        <Button mt={3} to={'/portfolio'}>See projects</Button>
    </Box>
    <Box width={1 / 2} >
        <HexServiceList services={services}/>
    </Box>

</Container>)`
    left:-370px;
    top:-36px;
`

export default styled(Services)`
  ${space}
`