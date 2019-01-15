import React from 'react'
import {StyledLink} from "../atoms";

export default ({item, path}) =>
    <StyledLink to={`${path}=${item.data.slug}`}>{item.data.title}</StyledLink>
