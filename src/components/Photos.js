import { Box, Flex } from "@rebass/grid";
import React from 'react';
import styled from 'styled-components';
import { Carousel, Photo } from '../components';
import image1 from '../image_workers_1.png';
import image2 from '../image_workers_2.png';
import image3 from '../image_workers_3.png';

const photos = [image1, image2, image3];

const Cell = styled(Box)`
  overflow: hidden;
  height: 90%;
`

const Photos = ({ pStyles, className, carousel }) => (
  <Carousel
    width={320}
    height={200}
    {...{ pStyles, className }}
    carousel={carousel}
    alignItems="center"
 >
    {carousel ? (
      photos
        .slice(0, 3)
        .map((photo, key) => <Photo {...{ photo, height: 320, key}} />)
    ) : (
      <Flex {...{key:1}}>
        <Cell width={2 / 3} pr={4}>
          <Photo {...{ photo: photos[0]}} />
        </Cell>
        <Cell width={1 / 3}>
          <Photo {...{ photo: photos[1], mb: 10}} />
          <Photo {...{ photo: photos[2]}} />
        </Cell>
      </Flex>
    )}
  </Carousel>
);

export default styled(Photos)`
  width: 100%;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[3]}px;
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: ${p => p.theme.space[5]}px;
  }
`;
