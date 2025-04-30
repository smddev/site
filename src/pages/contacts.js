import React, { Fragment, Component, useState, useRef } from 'react'
import {withRouteData} from 'react-static'
import {
    Button,
    Container,
    H1WithBackground,
    Link1,
    Subtitle,
    Input,
    Textarea,
    underline
} from "../atoms";
import {withLayout} from "../organisms";
import {Box, Flex} from "@rebass/grid";
import Envelop from "../envelop.svg";
import Phone from "../phone.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import styled from "styled-components";
import {space} from "styled-system";
import { FormattedMessage, useIntl } from 'react-intl'

const IconLink = styled(Link1)`
  position: relative;
  display: inline-block;
  font-size: ${p => p.theme.fontSizes[10]}px;
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
  @media(max-width: ${p => p.theme.breakpoints[0]}) {
    &:before { 
        width:46px;
        height: 40px;
        left: -45px;
        top: 9px;
        margin-left: 0px;
        background-size: 25px;
        background-position: left center;
      }
      padding-top: 15px;
      margin-left: 47px;
      font-size: ${p => p.theme.fontSizes[11]}px;
      ${underline};
      background-position: 0 37px !important;
  }
`

const MySubtitle = styled(Subtitle)`
    font-size: ${p => p.theme.fontSizes[3]}px;
    margin-bottom: 15px;
    @media(min-width: ${p =>p.theme.breakpoints[0]}) {
        font-size: ${p => p.theme.fontSizes[4]}px;
    } 
`

const Comment = styled(Textarea)`
  height: 250px;
`

export default withLayout({noForm: true})(withRouteData(({page, photos}) => (
    <Fragment>
        <Container mt={7}>
            <Flex width={[1, 1, 1/2]} m={[0, 3, 0]} pr={[0,0,3]} flexDirection={'column'}>
                <H1WithBackground>{page.data.title}</H1WithBackground>
                <MySubtitle>
                    {page.data.subtitle}
                </MySubtitle>

                <Flex mr={[0, 0, 'auto', 0]} ml={[0, 0, 'auto', 0]} mt={[0, 7]} flexDirection={['column', 'row', 'column', 'row']}>
                    <Box width={[1, 1/2, 1, 1/2]}>
                        <IconLink fontSize={13} href={`mailto: ${page.data.email}`} image={Envelop}>
                            {page.data.email}
                        </IconLink>
                    </Box>
                    <Box width={[1, 1/2, 1, 1/2]} mt={[3, 0, 3, 0]}>
                        <IconLink fontSize={13} href="https://www.linkedin.com/company/5075534" image={LinkedInIcon}>
                            {page.data.linkedin}
                        </IconLink>
                    </Box>
                </Flex>
            </Flex>
        </Container>
    </Fragment>
)))


