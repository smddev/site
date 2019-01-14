import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from "react-markdown";
import {H1, P} from "../atoms";
import {Box, Flex} from '@rebass/grid'
import framed from "../templates/framed";

const ServiceList = ({services}) =>
    <ul>
        {
            services.map(s => <li key={s.data.slug}>{s.data.title}</li>)
        }
    </ul>


export default framed(withRouteData(({page, services}) => (
    <div>
        <Flex>
            <Box width={1 / 2} px={2}>
                <H1 fontSize={6}>{page.data.title}</H1>
                <P fontSize={3}>{page.data.subtitle}</P>
                <Markdown source={page.content} escapeHtml={false}/>
            </Box>
            <Box width={1 / 2} px={2}>
                <ServiceList services={services}/>
            </Box>
        </Flex>
    </div>
)))
