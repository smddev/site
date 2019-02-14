import React, {Fragment} from 'react'
import {Subtitle, AspectBox, description, StyledLink} from '../atoms'
import cloudinary from "../cloudinary"
import styled, {css} from 'styled-components';
import {position, bottom, left, space} from 'styled-system';

const Title = styled.h3`
  ${description};
  ${position};
  ${bottom};
  margin: 0;
  padding: 0 40px;
  font-weight: ${p => p.theme.fontWeights[1]};
`

const HoverTitle = styled(Title)`
  ${space};
  color: ${p => p.theme.colors.orange[1]};
`

export const PROJECT_CARD_RATIO='73%';
const CARD_X_PADDING='40px';
const CARD_Y_PADDING='24px';

const Industries = styled(({industries, className}) => <Subtitle {...{className}}>
    {industries.join(',')}
</Subtitle>)`
  ${position};
  ${bottom};
  ${space};
  color: white;
  padding: 0 ${CARD_X_PADDING};
`


const Tech = styled.span`
  background-color: ${p => p.theme.colors.black[0]};
  color: white;
  font-size: ${p => `${p.theme.fontSizes[0]}px`};
  border-radius: ${p => `${p.theme.radii[0]}px`};
  padding: 5px 5px 3px 5px;
  &:not(:last-child) {
    margin-right: 8px;
  };
`

const Techs = styled(({techs, className}) => <div {...{className}}>
    {techs.map((t, i)=><Tech key={i}>{t}</Tech>)}
</div>)`
  ${position};
  ${bottom};
  ${left}
`

const IMAGE_PATH='site/project'
const getImageUrl = (name) => cloudinary.url(`${IMAGE_PATH}/${name}`, {width: 320, crop: "scale"})

const cover = css`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
`

const HoverProjectCard = styled(({project, className}) => <div {...{className}}>
    <HoverTitle mt={'32px'}>{project.data.title}</HoverTitle>
    <Subtitle mt={1} px={CARD_X_PADDING}>{project.data.description}</Subtitle>
    <Industries mt={2} industries={project.data.industries}/>
    <Techs position='absolute' bottom={CARD_Y_PADDING} left={CARD_X_PADDING} techs={project.data.techs}/>
</div>)`
  background-color: ${p => p.theme.colors.gray[0]};
  ${cover};
`


const ProjectCard = ({project, className}) => <StyledLink to={`/portfolio/projects/${project.data.slug}`}>
    <AspectBox ratio={PROJECT_CARD_RATIO} {...{className}}>
        <HoverProjectCard {...{project}}/>
        <VoidProjectCard {...{project}}/>
    </AspectBox>
</StyledLink>


const StyledProjectCard = styled(ProjectCard)`
  position: relative;
  overflow: hidden;
`

const VoidProjectCard = styled(({project, className}) => <div {...{className}}>
    <Title position='absolute' left='0' bottom='56px'>{project.data.title}</Title>
    <Industries position='absolute' bottom={CARD_Y_PADDING} industries={project.data.industries}/>
</div>)`
  ${cover};
  transition: opacity .5s;  
  opacity: 1;
  ${StyledProjectCard}:hover & {
    opacity: 0;
  }
  &:before {
    content: '';
    ${cover};  
    background-image: ${p=> `url('${getImageUrl(p.project.data.cover)}')`};
    background-size: cover;
    filter: brightness(75%);
  }  
`

export default StyledProjectCard;
