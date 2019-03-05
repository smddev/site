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

const BT = (props) => <Button {...props} to={'/portfolio'}>See projects</Button>

const B1 = styled(BT)`
  display: none;
  @media(min-width: ${p=>p.theme.breakpoints[2]}) {
    display: inline-block;
  }
`

const B2 = styled(BT)`
  @media(min-width: ${p=>p.theme.breakpoints[2]}) {
    display: none;
  }
`


const Dscrptn = styled(({children, ...props}) => <Description {...props}>
    {children}
</Description>)`
  display: none;
  
  @media(min-width: ${p=>p.theme.breakpoints[0]}) {
    max-width: 80%;
    display: block;
  }
`


const Services =  withBackground(background, 241, 451)(({page, services, className}) =>
    <Container className={className} flexWrap='wrap' alignItems='center'>
        <Box width={[1, 1, 1, 1 / 2]} pr={['0px', 5, 5]}>
            <H1 dangerouslySetInnerHTML={{ __html: page.data.title }}/>
            <Subtitle mb={5}>{page.data.subtitle}</Subtitle>
            <Dscrptn source={page.content} escapeHtml={false}/>
            <B1 mt={3}/>
        </Box>
        <Box width={[1, 1, 1, 1 / 2]} >
            <HexServiceList services={services}/>
            <B2 mt={6}/>
        </Box>

</Container>)`
    left:-370px;
    top:-36px;
`

export default styled(Services)`
  ${space}
`