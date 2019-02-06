import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {H1, H2, P, Button} from '../atoms';
import {Box, Flex} from '@rebass/grid'
import {IndustryList, ProjectGallery, ServiceList} from '../components';
import Services from '../organisms/Services'


export default withRouteData(({page, services, projects, industries}) => (
    <Fragment>
        <Services page={page} services={services}/>

        <Flex justifyContent='center'>
            <H2 fontSize={4}>Industries</H2>
        </Flex>
        <Flex justifyContent='center'>
            <IndustryList industries={industries}/>
        </Flex>
        <Flex justifyContent='center'>
            <H2 fontSize={4}>Recent projects</H2>
        </Flex>
        <ProjectGallery projects={projects}/>

        <Flex justifyContent='center'>
            <Button>
                Make calculation
            </Button>
        </Flex>
    </Fragment>
))
