import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from "react-markdown";
import {H1} from "../atoms";

const ServiceList = ({services}) =>
    <ul>
        {
            services.map(s => <li key={s.data.slug}>{s.data.title}</li>)
        }
    </ul>


export default withRouteData(({page, data}) => (
    <div>
        <H1 fontSize={6}>{page.data.title}</H1>
        <ServiceList services={data.services}/>
        <Markdown source={page.content} escapeHtml={false}/>
    </div>
))
