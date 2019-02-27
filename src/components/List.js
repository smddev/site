import React from 'react'
import {Box, Flex} from '@rebass/grid'
import {withWindowLocation} from "../utils";
import queryString from "query-string";

export default withWindowLocation(({items, children, linkPath, includes, vertical, className, location, filterBy}) => {
    const query = queryString.parse(location.search);
    return <Flex flexWrap='wrap'
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
                        item,
                        active: query[filterBy] === item.data.slug
                    })}
                </Box>)}
    </Flex>
})