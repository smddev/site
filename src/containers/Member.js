import React from 'react';
import {withRouteData} from 'react-static';
import {Markdown} from '../components';
import {Container, H1} from "../atoms";
import {Image} from "cloudinary-react";

export default withRouteData(({item}) => (
    <Container>
        <H1>{item.data.title}</H1>
        <Image publicId={`site/member/${item.data.avatar}`}
               gravity='face'
               crop="fill"
               width={320}
               height={320}/>
        <Markdown source={item.content} escapeHtml={false}/>
    </Container>
))
