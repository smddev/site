import React from 'react'
import {Link} from '@reach/router'

export default ({item, basePath}) =>
    <Link to={`${basePath}/${item.data.slug}`}>{item.data.title}</Link>
