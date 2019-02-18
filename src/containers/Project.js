import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import Markdown from 'react-markdown'
import {Container, H1, Subtitle} from "../atoms";
import {Image} from "cloudinary-react";
import {Box} from '@rebass/grid'
import {Footer} from '../organisms'

const serviceList = (serviceIds, services) => {
    return services.filter(item => serviceIds && serviceIds.includes(item.data.slug)).
    map(item => item.data.title).
    join(', ');
}

export default withRouteData(({item, data}) => (
    <Fragment>
        <Container>
            <Box width={2/3}>
                <H1>{item.data.title}</H1>
                <Subtitle>{serviceList(item.data.services, data.services)}</Subtitle>

                <Box mt={5} mb={5}>
                    <Image  publicId={'site/project/' + item.data.cover}
                       crop="fill"
                       gravity='auto'
                       width="auto"
                       height="320"
                       responsive
                       responsive_use_breakpoints/>
                </Box>

                <Markdown source={item.content} escapeHtml={false}/>
            </Box>
            <Box width={1/3}>

            </Box>
        </Container>
        <Footer mt={10} mb={6}/>
    </Fragment>
))
