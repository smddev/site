import React, {Fragment} from "react";
import {withRouteData} from "react-static";
import {
		Container,
		H2,
		H1WithBackground,
		Subtitle,
		P,
		withBackground
} from "../atoms";
import {Markdown, Facts, Carousel} from "../components";
import {Box} from "@rebass/grid";
import styled from "styled-components";
import {space} from "styled-system";
import {Feedback, MembersGallery, withLayout} from "../organisms";
import mgLeft from "../industriesLeft.svg";
import mgRight from "../managementRight.svg";
import Photos from "../components/Photos";
import {responsive} from "../utils";

const Intro = styled(P)`
  width: 100%;
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 30px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 80%;
    font-size: ${p => p.theme.fontSizes[4]}px};
  }
`;

const StyledFacts = styled(Facts)`
  width: 320px;
  margin: 130px 0 0 auto;
  @media (max-width: ${p => p.theme.breakpoints[2]}) {
    margin: auto;
  }
  @media (max-width: 360px) {
    margin-left: -15px;
  }
`;

const ManagementSection = styled(withBackground(mgRight, 708, 542, true)(
		withBackground(mgLeft, 274, 343)(({className, members}) => (
				<Container {...{className}}>
						<Box width={1}>
								<H2>Management</H2>
						</Box>

						<MembersGallery mt={3} members={members}/>
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

const ResponsivePhotos = responsive(({isMobile, ...props}) => <Photos carousel={isMobile} {...{...props}}/>);

export default withLayout()(
		withRouteData(({page, members, facts, reviews}) => (
				<Fragment>
						<Container mt={6}>
								<Box width={1}>
										<H1WithBackground>{page.data.title}</H1WithBackground>
										<Subtitle>{page.data.subtitle}</Subtitle>
										<Intro>{page.data.intro}</Intro>
								</Box>
								<ResponsivePhotos/>
						</Container>

						<Container>
								<Box width={[1, 1, 1, 2 / 3]}>
										<Markdown source={page.content} escapeHtml={false}/>
								</Box>
								<Box width={[1, 1, 1, 1 / 3]}>
										<StyledFacts carousel={true} {...{facts}} />
								</Box>
						</Container>

						<ManagementSection mt={4} {...{members}}/>

						<Feedback {...{reviews}} />
				</Fragment>
		))
);
