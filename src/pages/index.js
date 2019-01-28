import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import Markdown from "react-markdown";
import {H1, H2, P} from "../atoms";
import {Box, Flex} from '@rebass/grid'
import {IndustryList, ProjectGallery, ServiceList} from "../components";


export default withRouteData(({page, services, projects, industries}) => (
    <Fragment>
        <Flex alignItems='center'>
            <Box width={1 / 2} px={2} py={4}>
                <H1 fontSize={6}>{page.data.title}</H1>
                <P fontSize={3}>{page.data.subtitle}</P>
                <Markdown source={page.content} escapeHtml={false}/>
            </Box>
            <Box width={1 / 2} px={2} py={4}>
                <ServiceList services={services} vertical bg='gray.1'/>
            </Box>
        </Flex>


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

    </Fragment>
))
