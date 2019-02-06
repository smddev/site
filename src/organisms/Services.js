import React from 'react';
import Container from "../atoms/Container";
import {Box} from "@rebass/grid";
import {H1, P, Button} from "../atoms";
import Markdown from "react-markdown";
import {ServiceList} from '../components';
import styled from 'styled-components';

const Heading = styled(H1)`
  line-height: ${p => `${p.theme.lineHeight[6]}px`};
  font-size: ${p => `${p.theme.fontSizes[6]}px`};
  margin-bottom: 0;
`

const Description = styled(Markdown)`
  font-size: ${p => `${p.theme.fontSizes[3]}px`};
  line-height: ${p => `${p.theme.lineHeight[3]}px`};
`
export default ({page, services}) => <Container alignItems='center'>
    <Box width={1 / 2} px={2} py={4}>
        <Heading>{page.data.title}</Heading>
        <P fontSize={2} fontWeight={0} mb={5} color={'gray.1'}>{page.data.subtitle}</P>
        <Description source={page.content} escapeHtml={false}/>
        <Button mt={3}>See projects</Button>
    </Box>
    <Box width={1 / 2} px={2} py={4}>
        <ServiceList services={services} vertical bg='gray.1'/>
    </Box>

</Container>