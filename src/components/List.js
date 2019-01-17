import React from 'react'
import ListItem from "./ListItem";
import {Box, Flex} from '@rebass/grid'

export default ({items, itemPath}) =>
    <Flex flexWrap='wrap'
          as='ul'
          css={{listStyleType: "none"}}>
        {items.map(item =>
            <Box key={item.data.slug}
                 as='li'
                 px={3}
                 css={{textDecoration: "none"}}>
                <ListItem path={itemPath} item={item}/>
            </Box>)}
    </Flex>
