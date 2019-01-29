import React from 'react'
import {Box, Flex} from '@rebass/grid'

export default ({items, children, linkPath, includes, vertical}) =>
    <Flex flexWrap='wrap'
          flexDirection={vertical ? 'column' : 'row'}
          as='ul'
          css={{listStyleType: "none"}}>
        {items.filter(item => !includes || includes.includes(item.data.slug))
            .map(item =>
                <Box key={item.data.slug}
                     as='li'
                     px={3}
                     css={{textDecoration: "none"}}>
                    {React.cloneElement(children, {
                        linkPath,
                        item
                    })}
                </Box>)}
    </Flex>
