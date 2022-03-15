import { Box } from "@rebass/grid";
import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Button, description, Subtitle, H1WithBackground } from "../atoms";
import Container from "../atoms/Container";
import { Markdown } from '../components';
import HexServiceList from "../components/HexServiceList";
import { FormattedMessage } from 'react-intl'


const Description = styled(Markdown)`
  ${description};
  width: 90%;
`

const BT = (props) => <Button {...props} to={'/portfolio'}><FormattedMessage id='message.projects'/></Button>

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


const Services =  ({page, services, className}) =>
    <Container className={className} flexWrap='wrap' alignItems='center'>
        <Box width={[1, 1, 1, 1, 1 / 2]} pr={['0px', 5, 5]}>
            <H1WithBackground dangerouslySetInnerHTML={{ __html: page.data.title }}/>
            <Subtitle mb={5}>{page.data.subtitle}</Subtitle>
            <Dscrptn source={page.content} escapeHtml={false}/>
            <B1 mt={3}/>
        </Box>
        <Box width={[1, 1, 1, 1, 1 / 2]} mt={[-3, 0, 2]}>
            <HexServiceList services={services}/>
            <B2 mt={6}/>
        </Box>

</Container>

export default styled(Services)`
  ${space}
`