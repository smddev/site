import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from "react-markdown";

const ServiceList = ({services}) =>
    <ul>
        {
            services.map(s => <li key={s.data.slug}>{s.data.title}</li>)
        }
    </ul>


export default withRouteData(({page, data}) => (
    <div>
        <h1>{page.data.title}</h1>
        <ServiceList services={data.services}/>
        <Markdown source={page.content} escapeHtml={false}/>
    </div>
))
