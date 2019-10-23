import React, {Fragment, useState} from 'react';
import { Box, Flex } from "@rebass/grid";
import styled from 'styled-components';
import Photo from '../components/Photo';
import { Image } from "cloudinary-react";
import Carousel from '../components/Carousel';
import {layout, space} from 'styled-system';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import cloudinary from "../cloudinary";


const photos = ['167_IMG_0993', '060_IMG_3611', '070_IMG_0934-flipped'];

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

const Gallery = styled(({className, onClick}) => <Flex className={className}>
  <Cell width={2 / 3} pr={3}>
    <MainPhoto>
      <Photo photo={photos[0]} onClick={onClick}/>
    </MainPhoto>
  </Cell>
  <Cell width={1 / 3} height={'100%'}>
    <SmallPhoto first><Photo photo={photos[1]} onClick={onClick}/></SmallPhoto>
    <SmallPhoto><Photo position={'center'} photo={photos[2]} onClick={onClick}/></SmallPhoto>
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

const StyledCarousel = styled(({pStyles, className, onClick})=> <Carousel
  width={320}
  height={220}
  {...{ pStyles, className }}
  carousel={true}
  alignItems="center">
  {photos.map((photo, key) => <Photo key={key} onClick={onClick} photo={photo}/>)}
</Carousel>)`
  width: 100%;
  margin: ${p => p.theme.space[3]}px auto 0;
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    display: none;
  }
`

const getImageUrl = (index) => {
  const url = cloudinary.url(`site/group-photos/${photos[index]}`);
  return url;
}

const Photos = () => {
  const [lbState, setState] = useState({open: false, index: 0});
  const {open, index} = lbState;
  const onClick = (photo) => () => {
    const index = photos.findIndex(e => e === photo)
    setState({open: true, index: index >= 0 ? index : 0})
  }

  const photosLength = photos.length;
  const nextImage = (index) => () => {
    setState(ps => ({...ps, index}))
  }

  const closeLB = () => {
    setState(ps => ({...ps, open: false}))
  }

  return <Fragment>
    <StyledCarousel onClick={onClick}/>
    <Gallery onClick={onClick}/>
    {open && <Lightbox
        mainSrc={getImageUrl(index)}
        nextSrc={getImageUrl((index + 1)%photosLength)}
        prevSrc={getImageUrl((index + photosLength- 1)%photosLength)}
        onCloseRequest={closeLB}
        onMovePrevRequest={nextImage((index + photosLength- 1)%photosLength)}
        onMoveNextRequest={nextImage((index + 1)%photosLength)}
    />}
  </Fragment>;
}

export default Photos;
