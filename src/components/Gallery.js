import React from 'react'
import Card from "./Card";
import {Box, Flex} from '@rebass/grid'


export default ({items, itemsPath}) =>
    <Flex flexWrap='wrap'>
        {items.map(item =>
            <Box key={item.data.slug}>
                <Card path={itemsPath} item={item}/>
            </Box>)}
    </Flex>
