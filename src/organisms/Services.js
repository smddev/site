import React from 'react';
import Container from "../atoms/Container";
import {Box} from "@rebass/grid";
import {H1, P, Button, Subtitle} from "../atoms";
import Markdown from "react-markdown";
import {ServiceList} from '../components';
import styled from 'styled-components';
import HexServiceList from "../components/HexServiceList";
import {space} from 'styled-system';

const Description = styled(Markdown)`
  font-size: ${p => `${p.theme.fontSizes[3]}px`};
  line-height: ${p => `${p.theme.lineHeight[3]}px`};
`
const Services =  ({page, services, className}) => <Container className={className} alignItems='center'>
    <Box width={1 / 2} pr={5}>
        <H1 dangerouslySetInnerHTML={{ __html: page.data.title }}/>
        <Subtitle mb={5}>{page.data.subtitle}</Subtitle>
        <Description source={page.content} escapeHtml={false}/>
        <Button mt={3}>See projects</Button>
    </Box>
    <Box width={1 / 2}>
        <HexServiceList services={services}/>
    </Box>

</Container>

export default styled(Services)`
  ${space}
`