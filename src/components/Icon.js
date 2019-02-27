import React from 'react'
import {Image} from "cloudinary-react";
import styled, {withTheme} from 'styled-components';
import {themeGet, space} from 'styled-system'
import {H2, StyledLink, Description, Text, Hexagon, hoverLinkStyles} from "../atoms";
import {Flex, Box} from '@rebass/grid'

const ImageWrapper = styled(Box)`
  width: ${p => p.width}px;
  height: ${p => p.height}px; 
  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDescription = styled(Description)`
  ${hoverLinkStyles};
`

export default withTheme((props) => {
    const {linkPath, item, vertical, size, color, bg, mt, mx, active} = props;
    const pxSize = themeGet('icons')(props)[size || 0];
    const url = `${linkPath}${item.data.slug}`
    return <StyledLink to={url} {...{mt, mx}}>
        <Flex
            bg={bg}
            alignItems='center'
            flexDirection={vertical ? 'column' : 'row'}>

            <ImageWrapper width={pxSize} height={pxSize}>
                <Image publicId={`site/icons/${item.data.icon}`}
                       crop="fit"
                       width={pxSize}
                       height={pxSize}/>
            </ImageWrapper>
            <StyledDescription
                mt={vertical ? '24px' : '0'}
                ml={vertical ? '0' : '24px'}
                fontSize={vertical ? 4 : 10}
                lineHeight={vertical ? '24px' : '40px'}
                active={active}>
                    {item.data.title}
            </StyledDescription>
        </Flex>
    </StyledLink>
})

export const HexIcon = ({className, item, pxSize, linkPath, mt, active}) => <StyledLink to={`${linkPath}${item.data.slug}`} {...{className, mt}}>
    <Flex alignItems={'center'}>
        <Hexagon bg={item.data.background} height={40}>
            <ImageWrapper width={pxSize} height={pxSize}>
                <Image publicId={`site/icons/${item.data.icon}`}
                       crop="fit"
                       width={pxSize}
                       height={pxSize}/>
            </ImageWrapper>
        </Hexagon>
        <StyledDescription
            fontSize={10}
            lineHeight={'20px'}
            ml={'24px'}
            active={active}>
            {item.data.title}
        </StyledDescription>
    </Flex>
</StyledLink>;

