import React from 'react'
import {Card, H2, StyledLink} from "../atoms";
import cloudinary from "../cloudinary"

export default ({item, basePath}) =>
    <StyledLink to={`${basePath}/${item.data.slug}`}>
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
            <H2 color='gray.2'
                fontSize={3}>
                {item.data.title}
            </H2>
        </Card>
    </StyledLink>

