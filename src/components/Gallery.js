import React from 'react'
import {Box, Flex} from '@rebass/grid'


export default ({items, children}) =>
    <Flex flexWrap='wrap'>
        {items.map(item =>
            <Box key={item.data.slug} p={2}
                 width={[1, 1 / 2, 1 / 3]}>
                {React.cloneElement(children, {item})}
            </Box>)}
    </Flex>
