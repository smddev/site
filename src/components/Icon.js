import React from 'react'
import {Image} from "cloudinary-react";
import styled, {withTheme, css} from 'styled-components';
import {H2, StyledLink, Description, Text, hoverLinkStyles} from "../atoms";
import {Flex, Box} from '@rebass/grid'
import {IconHex} from "../atoms/Hexagon";
import {getField} from "../utils";

const ImageWrapper = styled(Box)`
  width: ${p=> `${p.vertical ? p.theme.icons[2] : p.theme.icons[1]}px`};
  height: ${p=> `${p.vertical ? p.theme.icons[2] : p.theme.icons[1]}px`};
  
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
  ${p => ({[p.vertical ? 'margin-top' : 'margin-left'] : '10px'})};
    
  @media(min-width: ${p => p.theme.breakpoints[2]}) {
    ${p => ({[p.vertical ? 'margin-top' : 'margin-left'] : '24px'})}
  }
  
`

const verticalStyles = css`
  width: 130px;
  margin-bottom: 22px;
  
  @media(min-width: ${p => p.theme.breakpoints[1]}) {
    width: 150px;
  }
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

export const HexIcon = withTheme(({theme, className, item, pxSize, linkPath, mt, active}) => <StyledLink to={`${linkPath}${item.data.slug}`} {...{className, mt}}>
    <Flex alignItems={'center'}>
        <IconHex color={getField(theme.colors, item.data.background)} height={40}>
            <HexImageWrapper {...{pxSize}}>
                <Image publicId={`site/icons/${item.data.icon}`}
                       crop="fit"/>
            </HexImageWrapper>
        </IconHex>
        <StyledDescription
            ml={['0px', '0px','10px','24px', '24px']}
            active={active}>
            {item.data.title}
        </StyledDescription>
    </Flex>
</StyledLink>);

