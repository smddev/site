import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from 'react-markdown'
import {H1} from "../atoms";
import {Image} from "cloudinary-react";
import {Box} from '@rebass/grid'
import PortfolioFilterList from "../components/PortfolioFilterList";

export default withRouteData(({item, data}) => (
    <div>
        <H1>{item.data.title}</H1>
        <PortfolioFilterList items={data.services}
                             filter={item.data.services}
                             name='service'/>
        <Box width={1} mx={5}>
            <Image publicId={item.data.cover}
                   crop="fill"
                   gravity='auto'
                   width="auto"
                   height="320"
                   responsive
                   responsive_use_breakpoints/>
        </Box>
        <Markdown source={item.content} escapeHtml={false}/>
    </div>
))
