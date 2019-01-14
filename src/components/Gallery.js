import React from 'react'
import {Box, Flex} from '@rebass/grid'


export default ({items, children}) =>
    <Flex flexWrap='wrap'>
        {items.map(item =>
            <Box key={item.data.slug}>
                {React.cloneElement(children, {item})}
            </Box>)}
    </Flex>
