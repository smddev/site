import React, {Fragment} from 'react'
import {withRouteData} from "react-static";
import {Container, H2, H1WithBackground, Subtitle, P, withBackground} from "../atoms";
import {Markdown, Carousel, Fact} from "../components";
import {Box, Flex} from "@rebass/grid";
import styled from 'styled-components';
import {space} from 'styled-system';
import {Feedback, Footer, MembersGallery} from "../organisms";
import mgLeft from '../industriesLeft.svg'
import mgRight from '../managementRight.svg'

const Intro = styled(P)`
  width: 80%;
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

const FactWrapper = styled.div`
  width:340px;
  >* {
    margin: 0 auto;
  }
`

const Facts = styled(({facts, className}) => <Carousel width={340} height={212} {...{className}}>
    {facts.slice(0,3).map((fact, key) => <FactWrapper {...{key}}><Fact {...{fact}}/></FactWrapper>)}
</Carousel>)`
  width: 340px;
  margin: 130px 0 0 auto;
`


export default withRouteData(({page, members, facts}) => (
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
            <Box width={2/3}>
               <Markdown source={page.content} escapeHtml={false}/>
            </Box>
            <Box width={1/3}>
                <Facts {...{facts}}/>
            </Box>
        </Container>

        <ManagementSection mt={4} {...{members}}/>

        <Feedback mt={11}/>

        <Footer mt={10} mb={6}/>
    </Fragment>
))
