import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {H1, H2, P, Button, withBackground} from '../atoms';
import {Box, Flex} from '@rebass/grid'
import {
    Services,
    Facts,
    Industries,
    Stages,
    Feedback,
    RecentProjects,
    Footer
} from '../organisms'
import background from "../feedback.svg";

const FeedbackWB = withBackground(background, 1133, 686)(({className, mt}) => <Feedback {...{className, mt}}/>)`
    left: -230px;
    top: 247px;
`

export default withRouteData(({page, services, projects, industries, facts, stages}) => (
    <Fragment>

        <Services mt={8} page={page} services={services}/>

        <Facts mt={10} facts={facts}/>

        <Industries mt={8} industries={industries}/>

        <Stages mt={11} stages={stages}/>

        <FeedbackWB mt={7}/>

        <RecentProjects mt={8} projects={projects}/>

        <Footer mt={10} mb={6}/>

    </Fragment>
))
