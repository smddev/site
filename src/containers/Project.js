import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from 'react-markdown'
import {H1} from "../atoms";
import {Image} from "cloudinary-react";
import styled from 'styled-components'


const Container = styled.div`
    width: 100%
`

export default withRouteData(({item}) => (
    <div>
        <H1>{item.data.title}</H1>
        <Container>
            <Image publicId={item.data.cover}
                   crop="scale"
                   width="auto"
                   responsive
                   responsive_use_breakpoints/>
        </Container>
        <Markdown source={item.content} escapeHtml={false}/>
    </div>
))
