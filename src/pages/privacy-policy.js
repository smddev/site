import React, { Fragment } from 'react'
import { withRouteData } from 'react-static'
import {
    Container,
    H1WithBackground,
    Subtitle,
    P
} from "../atoms";
import { withLayout } from "../organisms";
import { Box } from "@rebass/grid";
import styled, { createGlobalStyle } from "styled-components";
import { Markdown, StyledEmailLink } from "../components";

// Create a custom email link component specifically for the privacy policy page
const InlineEmailLink = styled(StyledEmailLink)`
  display: inline-block;
  margin-left: 8px;
`;

const Intro = styled(P)`
  width: 100%;
  font-size: 18px;
  line-height: 26px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 80%;
    font-size: 20px;
    line-height: 30px;
  }
`;

const MySubtitle = styled(Subtitle)`
    font-size: ${p => p.theme.fontSizes[3]}px;
    margin-bottom: 15px;
    @media(min-width: ${p =>p.theme.breakpoints[0]}) {
        font-size: ${p => p.theme.fontSizes[4]}px;
    } 
`

export default withLayout()(withRouteData(({page}) => (
  <Fragment>
    <Container mt={6} className="privacy-policy-page">
      <H1WithBackground mb={4} className="title">{page.data.title}</H1WithBackground>
        <Box width={1}>
            <MySubtitle mt={[0, 1, 2, 3, 4]} className="subtitle">{page.data.subtitle}</MySubtitle>
            <Intro mt={[4, 4, 5]} className="intro">{page.data.intro}</Intro>
            <Markdown
                    source={page.data.body}
                    escapeHtml={false}
                    renderers={{
                        link: props => {
                            // Check if this is a mailto link
                            if (props.href && props.href.startsWith('mailto:')) {
                                const email = props.href.replace('mailto:', '');
                                return <InlineEmailLink email={email} />;
                            }
                            // Otherwise, render the default link
                            return <a {...props} />;
                        }
                    }}
                    />
        </Box>
    </Container>
  </Fragment>
)))