import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from 'react-markdown'
import {Container, H1} from "../atoms";
import {Image} from "cloudinary-react";
import {Box} from '@rebass/grid'
import {ServiceList} from "../components";

export default withRouteData(({item, data}) => (
    <Container>
        <H1>{item.data.title}</H1>
        <ServiceList services={data.services}
                     includes={item.data.services}
                     bg='gray.1'/>

        <Box width={1}>
            <Image publicId={'site/project/' + item.data.cover}
                   crop="fill"
                   gravity='auto'
                   width="auto"
                   height="320"
                   responsive
                   responsive_use_breakpoints/>
        </Box>
        <Markdown source={item.content} escapeHtml={false}/>
    </Container>
))
