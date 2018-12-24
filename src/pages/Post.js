import React from 'react'
import {withRouteData, Link} from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

export default withRouteData(({item, routes}) => (
    <div className="blog-post">
        <Link to="/posts">{'<'} Back</Link>
        <br/>
        <h3>{item.data.title}</h3>
        <Moment format="MMMM Do, YYYY">{item.data.date}</Moment>
        <img className="image" src={item.data.thumbnail} alt=""/>
        <Markdown source={item.content} escapeHtml={false}/>
    </div>
))
