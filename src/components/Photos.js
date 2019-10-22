import React, {Fragment} from 'react';
import { Box, Flex } from "@rebass/grid";
import styled from 'styled-components';
import Photo from '../components/Photo';
import { Image } from "cloudinary-react";
import Carousel from '../components/Carousel';
import {layout, space} from 'styled-system';

const photos = ['167_IMG_0993.jpg', '060_IMG_3611.jpg', '070_IMG_0934-flipped.jpg'];

const Cell = styled(Box)`
  ${layout}
`

const MainPhoto = styled.div`
  height:0;
  padding-top: 60%;
  width: 100%;
  position: relative;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

const SmallPhoto = styled.div`
  box-sizing: border-box;
  height: 50%;
  position: relative;
  > * {
    position: absolute;
    top: ${p => p.first ? 0 : p.theme.space[2]}px;
    left: 0;
    bottom: ${p => p.first ?  p.theme.space[2] : 0}px;
    right: 0;
  }
`

const StyledImage = styled(Image)`
    width: 100%;
    object-position: center;
    object-fit: cover;
    height: 100%;
    
    &:hover {
     background-color: rgb(0, 0, 0);
     opacity: 0.5;
    }
`

/*
/home/kna/workspaces/site-netlify/public/070_IMG_0934.jpg
/home/kna/workspaces/site-netlify/public/060_IMG_3611.jpg
/home/kna/workspaces/site-netlify/public/060_IMG_3611.jpg
/home/kna/workspaces/site-netlify/public/065_IMG_0926.jpg
/home/kna/workspaces/site-netlify/public/105_IMG_0954.jpg
/home/kna/workspaces/site-netlify/public/172_IMG_1000.jpg
/home/kna/workspaces/site-netlify/public/167_IMG_0993.jpg
/home/kna/workspaces/site-netlify/public/070_IMG_0934-flipped.jpg*/

const Gallery = styled(({className}) => <Flex className={className}>
  <Cell width={2 / 3} pr={3}>
    <MainPhoto>
      <Photo photo={`/${photos[0]}`}/>
    </MainPhoto>
  </Cell>
  <Cell width={1 / 3} height={'100%'}>
    <SmallPhoto first><Photo photo={`/${photos[1]}`}/></SmallPhoto>
    <SmallPhoto><Photo position={'center'} photo={`/${photos[2]}`}/></SmallPhoto>
  </Cell>
</Flex>)`
 width: 100%;
 @media (max-width: ${p => p.theme.brkpnts[2] - 1}px) {
   display: none;
 }
 
 @media (min-width: ${p => p.theme.breakpoints[1]}) {
   margin: ${p => p.theme.space[3]}px auto 0;
 }
`

const StyleCarousel = styled(({pStyles, className})=> <Carousel
  width={320}
  height={220}
  {...{ pStyles, className }}
  carousel={true}
  alignItems="center">
  {photos.map((photo, key) => <Photo key={key} photo={`/${photo}`}/>)}
</Carousel>)`
  width: 100%;
  margin: ${p => p.theme.space[3]}px auto 0;
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    display: none;
  }
`

const Photos = () => <Fragment>
 <StyleCarousel/>
 <Gallery/>
</Fragment>;

export default Photos;
