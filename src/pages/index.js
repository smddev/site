import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import Markdown from "react-markdown";
import {H1, H2, P, StyledLink} from "../atoms";
import {Box, Flex} from '@rebass/grid'
import {ProjectGallery} from "../components/galleries";
import PortfolioFilterList from "../components/PortfolioFilterList";

const ServiceList = ({services}) =>
    <ul>
        {
            services.map(s => <li key={s.data.slug}>
                <StyledLink to={`/portfolio?service=${s.data.slug}`}>
                    {s.data.title}
                </StyledLink>
            </li>)
        }
    </ul>

export default withRouteData(({page, services, projects, industries}) => (
    <Fragment>
        <Flex alignItems='center'>
            <Box width={1 / 2} px={2} py={4}>
                <H1 fontSize={6}>{page.data.title}</H1>
                <P fontSize={3}>{page.data.subtitle}</P>
                <Markdown source={page.content} escapeHtml={false}/>
            </Box>
            <Box width={1 / 2} px={2} py={4}>
                <ServiceList services={services}/>
            </Box>
        </Flex>
        <H2>Industries</H2>
        <PortfolioFilterList items={industries} name='industry'/>
        <H2>Recent projects</H2>
        <ProjectGallery projects={projects}/>

    </Fragment>
))
