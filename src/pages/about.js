import { Box } from "@rebass/grid";
import React, { Fragment } from "react";
import { withRouteData } from "react-static";
import styled from "styled-components";
import { space } from "styled-system";
import {
  Container,
  H1WithBackground,
  H2,
  P,
  Subtitle,
  withBackground
} from "../atoms";
import { Facts, Markdown } from "../components";
import Photos from "../components/Photos";
import mgLeft from "../industriesLeft.svg";
import mgRight from "../managementRight.svg";
import { Feedback, MembersGallery, withLayout } from "../organisms";
import { responsive } from "../utils";

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

const StyledFacts = styled(Facts)`
  width: 320px;
  margin: 113px 0 0 60px;
  @media (max-width: ${p => p.theme.breakpoints[2]}) {
    margin: auto;
  }
  @media (max-width: 360px) {
    margin-left: -15px;
  }
`;

const StyledH2 = styled(H2)`
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    font-size: 24px;
    line-height: 36px;
  }
`

const ManagementSection = styled(withBackground(mgRight, 708, 542, true)(
  withBackground(mgLeft, 274, 343)(({ className, members }) => (
    <Container {...{ className }}>
      <Box width={1} mb={-2}>
        <StyledH2>Management</StyledH2>
      </Box>

      <MembersGallery mt={[0, 1, 3, 4]} members={members} />
    </Container>
  ))`
    left: -360px;
    top: -50px;
`
)`
    right: -345px;
    top: 225px;
`)`
  ${space}
`;

const ResponsivePhotos = responsive(({ isMobile, ...props }) => (
  <Photos carousel={isMobile} {...{ ...props }} />
));

export default withLayout()(
  withRouteData(({ page, members, facts, reviews }) => (
    <Fragment>
      <Container mt={6}>
        <Box width={1}>
          <H1WithBackground>{page.data.title}</H1WithBackground>
          <Subtitle mt={[0, 1, 2, 3, 4]}>{page.data.subtitle}</Subtitle>
          <Intro mt={[4, 4, 5]}>{page.data.intro}</Intro>
        </Box>
        <ResponsivePhotos/>
      </Container>

      <Container mt={[3, 0, -4]}>
        <Box width={[1, 1, 1, 2 / 3]}>
          <Markdown source={page.content} className='aboutPage' escapeHtml={false} />
        </Box>
        <Box width={[1, 1, 1, 1 / 3]}>
          <StyledFacts carousel={true} {...{ facts }} />
        </Box>
      </Container>

      <ManagementSection mt={3} {...{ members }} />

      <Feedback mt={[5, 8, '155px']} {...{ reviews }} />
    </Fragment>
  ))
);
