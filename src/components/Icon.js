import React from 'react'
import {Image} from "cloudinary-react";
import styled, {withTheme, css} from 'styled-components';
import {H2, StyledLink, Description, Text, Hexagon, hoverLinkStyles} from "../atoms";
import {Flex, Box} from '@rebass/grid'

const ImageWrapper = styled(Box)`
  width: ${p=>`${p.theme.icons[2]}px`};
  height: ${p=>`${p.theme.icons[2]}px`};
  
  @media(min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p=> `${p.vertical ? p.theme.icons[3] : p.theme.icons[1]}px`};
    height: ${p=> `${p.vertical ? p.theme.icons[3] : p.theme.icons[1]}px`};
  }
   
  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDescription = styled(Description)`
  ${hoverLinkStyles};
  ${p => p.vertical && {'margin-top' : '10px'}};
    
  @media(min-width: ${p => p.theme.breakpoints[2]}) {
    ${p => ({[p.vertical ? 'margin-top' : 'margin-left'] : '24px'})}
  }
  
`

const verticalStyles = css`
  width: 150px;
  margin-bottom: 22px;
  @media(min-width: ${p => p.theme.breakpoints[2]}) {
    width: 240px;
    margin-bottom: 80px;
  }
`

const horizontalStyles = css`
  margin-bottom: 24px;
  @media(min-width: ${p => p.theme.breakpoints[2]}) {
    
  }
`

const SL = styled(StyledLink)`
  ${p => p.vertical ? verticalStyles : horizontalStyles}
`

export default withTheme((props) => {
    const {linkPath, item, vertical, active} = props;
    const url = `${linkPath}${item.data.slug}`
    return <SL vertical={vertical ? 1:0} to={url}>
        <Flex
            alignItems='center'
            flexDirection={vertical ? 'column' : 'row'}>

            <ImageWrapper {...{vertical}}>
                <Image publicId={`site/icons/${item.data.icon}`}/>
            </ImageWrapper>
            <StyledDescription
                {...{vertical, active}}>
                    {item.data.title}
            </StyledDescription>
        </Flex>
    </SL>
})

const HexImageWrapper = styled.div`
  width: ${p=>`${p.pxSize}px`};
  height: ${p=>`${p.pxSize}px`};
  
  img {
    width: 100%;
    height: 100%;
  }
`

export const HexIcon = ({className, item, pxSize, linkPath, mt, active}) => <StyledLink to={`${linkPath}${item.data.slug}`} {...{className, mt}}>
    <Flex alignItems={'center'}>
        <Hexagon bg={item.data.background} height={40}>
            <HexImageWrapper {...{pxSize}}>
                <Image publicId={`site/icons/${item.data.icon}`}
                       crop="fit"/>
            </HexImageWrapper>
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

