import React from 'react'
import {withRouteData} from 'react-static'
import Moment from 'react-moment'
import {Markdown} from '../components'
import {Link} from '@reach/router'

export default withRouteData(({item}) => (
    <div className="blog-post">
        <Link to="/blog">{'<'} Back</Link>
        <br/>
        <h3>{item.data.title}</h3>
        <Moment format="MMMM Do, YYYY">{item.data.date}</Moment>
        <img className="image" src={item.data.thumbnail} alt=""/>
        <Markdown source={item.content} escapeHtml={false}/>
    </div>
))
