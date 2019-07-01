import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {withBackground} from '../atoms';
import {Facts} from '../components';
import styled, {css} from 'styled-components';
import {
    Services,
    Industries,
    Stages,
    Feedback,
    RecentProjects,
} from '../organisms'
import background from "../feedback.svg";
import {withLayout} from "../organisms";
import {responsive} from "../utils";

const FeedbackWB = withBackground(background, 1133, 686)(({className, mt, reviews}) => <Feedback {...{className, mt, reviews}}/>)`
    left: -230px;
    top: 247px;
`

const StyledFacts = styled(Facts)`
  width: 320px;
  margin: 140px auto 0;
  @media(min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
  }
`

const pStyles = css`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  @media(min-width: ${p => p.theme.breakpoints[3]}) {
    justify-content: space-between;
  }
`;

const SSF = responsive(({isMobile, ...props}) => <StyledFacts carousel={isMobile} {...{...props, pStyles}}/>);

export default withLayout()(withRouteData(({page, services, projects, industries, facts, stages, reviews}) => (
    <Fragment>

        <Services mt={[6, 7, 8]} page={page} services={services}/>

        <SSF {...{facts}}/>

        <Industries mt={8} industries={industries}/>

        <Stages mt={11} stages={stages}/>

        <FeedbackWB mt={[5, 5, 5 ,5, 11]} {...{reviews}}/>

        <RecentProjects mt={8} projects={projects}/>

    </Fragment>
)))
