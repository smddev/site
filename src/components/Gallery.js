import React from 'react'
import {Box, Flex} from '@rebass/grid'


export default ({items, children}) =>
    <Flex flexWrap='wrap' py={2} px={[2, 4, 6]}>
        {items.map(item =>
            <Box key={item.data.slug} p={3}
                 width={[1, 1 / 2, 1 / 3]}>
                {React.cloneElement(children, {item})}
            </Box>)}
    </Flex>
