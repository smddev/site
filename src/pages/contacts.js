import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {Container, H1, H1WithBackground, Link1, Subtitle} from "../atoms";
import {Footer} from "../organisms";
import {Box, Flex} from "@rebass/grid";
import Envelop from "../envelop.svg";
import Phone from "../phone.svg";
import styled from "styled-components";

const IconLink = styled(Link1)`
  position: relative;
  display: inline-block;
  font-size: 20px;
  padding-top: 60px;
  &:before {
    content: '';
    position: absolute;
    width:46px;
    height: 40px;
    top: 0;
    left: 50%;
    margin-left: -23px;
    background-repeat: no-repeat;
    background-image: url(${p => p.image});
  }
`

export default withRouteData(({page}) => (
    <Fragment>
        <Container mt={7}>
            <Flex width={1/2} flexDirection={'column'}>
                <H1WithBackground>{page.data.title}</H1WithBackground>
                <Subtitle>
                    {page.data.subtitle}
                </Subtitle>

                <Flex mt={7}>
                    <Box width={1/2}>
                        <IconLink href={`mailto: ${page.data.email}`} image={Envelop}>
                            {page.data.email}
                        </IconLink>

                    </Box>
                    <Box width={1/2}>
                        <IconLink href={`tel: ${page.data.phone}`} image={Phone}>
                            {page.data.phone}
                        </IconLink>
                    </Box>
                </Flex>
            </Flex>
            <Box width={1/2}></Box>
        </Container>
        <Footer noForm mt={10} mb={6}/>
    </Fragment>
))


