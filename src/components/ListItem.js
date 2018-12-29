import React from 'react'
import {Link} from 'react-static'

export default ({item, path}) =>
    <Link to={`${path}/${item.data.slug}`}>{item.data.title}</Link>
