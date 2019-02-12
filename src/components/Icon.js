import React from 'react'
import {Image} from "cloudinary-react";
import styled from 'styled-components';
import {themeGet, space} from 'styled-system'
import {H2, StyledLink, description, Text} from "../atoms";
import {Flex, Box} from '@rebass/grid'

const Description = styled(Text)`
    ${description}
`

export default ({linkPath, item, vertical, size, color, bg, mt, mx}) => {
    const pxSize = themeGet('icons')[size || 0]
    const url = `${linkPath}${item.data.slug}`
    return <StyledLink to={url} {...{mt, mx}}>
        <Flex
            bg={bg}
            alignItems='center'
            flexDirection={vertical ? 'column' : 'row'}>
            <Box>
                <Image publicId={`site/icons/${item.data.icon}`}
                       crop="fit"
                       width={pxSize}
                       height={pxSize}/>
            </Box>
            <Box mt={'14px'}>
                <Description>{item.data.title}</Description>
            </Box>
        </Flex>
    </StyledLink>
}


