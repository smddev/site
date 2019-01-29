import React from 'react'
import {FlexDiv, H2, StyledLink} from "../atoms";
import cloudinary from "../cloudinary"


export default ({item, basePath, imagePath}) =>
    <StyledLink to={`${basePath}/${item.data.slug}`}>
        <FlexDiv height='320px' position={'relative'}>
            <FlexDiv backgroundImage={`url(${cloudinary.url(imagePath + '/' + item.data.cover,
                {width: 320, crop: "scale"})})`}
                     backgroundSize='cover'
                     borderRadius={0}
                     position='absolute'
                     left={0}
                     right={0}
                     top={0}
                     bottom={0}
                     filter='brightness(75%)'
                     bg='gray.0'>
            </FlexDiv>
            <FlexDiv p={4}
                     position='absolute'
                     left={0}
                     right={0}
                     top={0}
                     bottom={0}
                     alignItems='flex-end'>
                <H2 color='white.0'
                    fontSize={3}>
                    {item.data.title}
                </H2>
            </FlexDiv>
        </FlexDiv>
    </StyledLink>

