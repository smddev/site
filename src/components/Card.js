import React from 'react'
import {Card, StyledLink} from "../atoms";
import cloudinary from "../cloudinary"

export default ({item, basePath}) =>
    <Card backgroundImage={`url(${cloudinary.url(item.data.cover,
        {width: 320, crop: "scale"})})`}
          backgroundSize='cover'
          borderRadius={0}
          px={4}
          py={4}
          css={{
              minHeight: '320px'
          }}
          alignItems='flex-end'
          bg='gray.0'>
        <StyledLink
            color='gray.2'
            fontSize={3}
            to={`${basePath}/${item.data.slug}`}>
            {item.data.title}
        </StyledLink>
    </Card>

