import React from 'react'
import {FlexDiv, H2, StyledLink} from "../atoms";
import {Image} from "cloudinary-react";
import {Flex} from '@rebass/grid'


export default ({item}) =>
    <StyledLink to={`/team/members/${item.data.slug}`}>
        <FlexDiv flexDirection='column'>
            <Image publicId={`site/member/${item.data.avatar}`}
                   gravity='face'
                   crop="fill"
                   width={320}
                   height={320}/>
            <Flex justifyContent='center'>
                <H2>{item.data.title}</H2>
            </Flex>
        </FlexDiv>
    </StyledLink>
