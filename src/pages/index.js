import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {H1, H2, P, Button} from '../atoms';
import {Box, Flex} from '@rebass/grid'
import {ProjectGallery} from '../components';
import {
    Services,
    Facts,
    Industries,
    Stages,
    Feedback
} from '../organisms'

export default withRouteData(({page, services, projects, industries, facts, stages}) => (
    <Fragment>
        <Services mt={8} page={page} services={services}/>

        <Facts mt={10} facts={facts}/>

        <Industries mt={8} industries={industries}/>

        <Stages mt={11} stages={stages}/>

        <Feedback mt={7}/>

        <ProjectGallery projects={projects}/>

        <Flex justifyContent='center'>
            <Button>
                Make calculation
            </Button>
        </Flex>
    </Fragment>
))
