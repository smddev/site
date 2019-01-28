import React from 'react'
import {Image} from "cloudinary-react";
import {themeGet} from 'styled-system'
import {H2, StyledLink} from "../atoms";
import {Flex, Box} from '@rebass/grid'


export default ({path, item, vertical, size, color, bg}) => {
    const pxSize = themeGet('icons')[size || 0]
    const url = `${path}${item.data.slug}`
    return <StyledLink to={url}>
        <Flex
            bg={bg}
            alignItems='center'
            flexDirection={vertical ? 'column' : 'row'}>
            <Box px={2}>
                <Image publicId={`site/icons/${item.data.icon}`}
                       crop="fit"
                       width={pxSize}
                       height={pxSize}/>
            </Box>
            <Box>
                <H2 fontSize={[2]} color={color}>{item.data.title}</H2>
            </Box>
        </Flex>
    </StyledLink>
}


