import React, {Fragment} from 'react'
import {useRouteData} from 'react-static'
import {withBackground} from '../atoms';
import {CombinedFacts} from '../components';
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

const FeedbackWB = withBackground(background, 1133, 686)(({className, mt, reviews}) => <Feedback {...{className, mt, reviews}}/>)`
    left: -230px;
    top: 247px;
`

export default () => { 
    const { page, services, projects, industries, facts, stages, reviews } = useRouteData();    
    return (
        <Fragment>

            <Services mt={[6, 7, 8]} page={page} services={services}/>

            <CombinedFacts {...{facts}}/>

            <Industries mt={8} industries={industries}/>

            <Stages mt={11} stages={stages}/>

            <FeedbackWB mt={[5, 5, 5 ,5, 11]} {...{reviews}}/>

            <RecentProjects mt={8} projects={projects}/>

        </Fragment>
    )}

