import React, {Fragment} from 'react'
import {Container} from '../atoms'
import {Box} from '@rebass/grid'
import styled from 'styled-components';
import {space, display} from 'styled-system';
import {AspectBox, H1, Subtitle} from "../atoms";
import {Carousel} from '../components';
import ProjectCard, {PROJECT_CARD_RATIO} from '../components/ProjectCard';
import { FormattedMessage } from 'react-intl'

const Title = styled(({className}) => <div {...{className}}>
  <H1 mt={3}><FormattedMessage id='message.projects.latest'/></H1>
  <Subtitle width={'60%'}><FormattedMessage id='message.projects.success'/></Subtitle>
</div>)`
${display}
${space}
`

const TitleCard = () => <AspectBox ration={PROJECT_CARD_RATIO}>
  <Title/>
</AspectBox>

const Cell = styled(({children, className}) => <Box {...{className}} width={[1, 1, 1 / 2, 1 / 2, 1 / 3]}
                                                    px={['0px', '0px', '0px', '12px']}
                                                    pb={['0px', '0px', '0px', '24px']}>
  {children}
</Box>)`
${display}
`

const TabletCarousel = styled(Carousel)`
  @media(min-width: ${p => p.theme.breakpoints[2]}) {
    display: none;
  }
`

const DesktopCarousel = styled(Carousel)`
  @media(max-width: ${p => p.theme.brkpnts[2] - 1}px) {
    display: none;
  }
`


const SC = styled(({className, children}) => <Fragment>
    <TabletCarousel width={350} height={350 * PROJECT_CARD_RATIO} {...{className}} carousel>
      {children}
    </TabletCarousel>
    <DesktopCarousel width={350} height={350 * PROJECT_CARD_RATIO} {...{className}}>
      {children}
    </DesktopCarousel>
  </Fragment>
  )`
  width: 100%;
  ${space};
`

const RecentProjects = ({projects, className, pStyles, carousel}) => <Container px={[3, 3, 3, '4px']} {...{
  className,
  flexWrap: 'wrap'
}}>
  <Title display={['block', 'block', 'block', 'none']}/>
  <SC mt={4}>
    <Cell display={['none', 'none', 'none', 'block']}>
      <Title/>
    </Cell>

    {projects.slice(0, 5).map((p, i) =>
      <Cell key={i}>
        <ProjectCard project={p}/>
      </Cell>
    )}
  </SC>
</Container>

export default styled(RecentProjects)`
  ${space}
`