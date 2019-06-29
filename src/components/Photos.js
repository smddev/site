import React from 'react';
import {Carousel, Photo, Review} from '../components';
import styled from 'styled-components';
import image1 from '../image_workers_1.png';
import image2 from '../image_workers_2.png';
import image3 from '../image_workers_3.png';
import {Box, Flex} from "@rebass/grid";

const photos = [image1, image2, image3];
const sizes = [100, 100, 100];

const Photos = ({pStyles, className, carousel}) =>
		<Carousel width={320} height={225} {...{pStyles, className}} carousel={carousel} alignItems='center'>
				{carousel ? photos.slice(0, 3).map((photo, key) =>
								<Photo {...{photo, size: sizes[0]}}/>)
						:
						<Flex>
								<Box width={2 / 3} pr={4}>
										<Photo {...{photo: photos[0], size: sizes[0]}}/>
								</Box>
								<Box width={1 / 3}>
										<Photo {...{photo: photos[1], size: sizes[1], mb: 10}}/>
										<Photo {...{photo: photos[2], size: sizes[2]}}/>
								</Box>
						</Flex>
				}

		</Carousel>

export default styled(Photos)`
	width: 100%;
	margin: 0 auto;
`