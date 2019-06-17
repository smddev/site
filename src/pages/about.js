import React, {Fragment} from 'react'
import {withRouteData} from "react-static";
import {Container, H2, H1WithBackground, Subtitle, P, withBackground} from "../atoms";
import {Markdown, Facts} from "../components";
import {Box, Flex} from "@rebass/grid";
import styled from 'styled-components';
import {space} from 'styled-system';
import {Feedback, Footer, MembersGallery, withLayout} from "../organisms";
import mgLeft from '../industriesLeft.svg'
import mgRight from '../managementRight.svg'

const Intro = styled(P)`
    width: 100%;
    font-size: ${p => `${p.theme.fontSizes[4]}px`};
  
 	@media(min-width: ${p => p.theme.breakpoints[2]}) {
  		width: 80%;
    }
    
    @media(max-width: ${p => p.theme.breakpoints[0]}) {
        font-size: ${p => `${p.theme.fontSizes[3]}px`};
        line-height: ${p => `${p.theme.lineHeight[3]}px`};
  }
`

const MorphBox = styled(Box)`
  @media(max-width: ${p => p.theme.breakpoints[2]}) {
  	width: 100%;
  }
`

const StyledFacts = styled(Facts)`
  width: 320px;
  margin: 130px 0 0 auto;
  @media(max-width: ${p => p.theme.breakpoints[2]}) {
    margin: auto;
  }
  @media(max-width: 360px) {
    margin-left: -15px;
  }
`

const ManagementSection = styled(withBackground(mgRight,708, 542, true)(
        withBackground(mgLeft, 274, 343)(({className, members}) => <Container {...{className}} flexWrap={'wrap'}>
    <Box width={1}>
        <H2>Management</H2>
    </Box>

    <MembersGallery mt={3} members={members}/>
</Container>)`
    left: -360px;
    top: -50px;
`)`
    right: -345px;
    top: 225px;
`)`
${space}
`

export default withLayout()(withRouteData(({page, members, facts}) => (
    <Fragment>
        <Container mt={6}>
            <Box width={1}>
              <H1WithBackground>{page.data.title}</H1WithBackground>
              <Subtitle>
                  {page.data.subtitle}
              </Subtitle>
              <Intro>{page.data.intro}</Intro>
            </Box>
        </Container>

        <Container>
            <MorphBox width={2/3}>
               <Markdown source={page.content} escapeHtml={false}/>
            </MorphBox>
            <MorphBox width={1/3}>
                <StyledFacts carousel={true} {...{facts}}/>
            </MorphBox>
        </Container>

        <ManagementSection mt={4} {...{members}}/>

        <Feedback mt={11}/>

    </Fragment>
)))
