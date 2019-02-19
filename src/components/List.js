import React from 'react'
import {Box, Flex} from '@rebass/grid'

export default ({items, children, linkPath, includes, vertical, className}) =>
    <Flex flexWrap='wrap'
          flexDirection={vertical ? 'column' : 'row'}
          as='ul'
          className={className}
          css={{listStyleType: "none", padding: 0}}>
        {items.filter(item => !includes || includes.includes(item.data.slug))
            .map(item =>
                <Box key={item.data.slug}
                     as='li'
                     css={{textDecoration: "none"}}>
                    {React.cloneElement(children, {
                        linkPath,
                        item
                    })}
                </Box>)}
    </Flex>
