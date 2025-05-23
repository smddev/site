import React from 'react'
import {Subtitle, AspectBox, description, StyledLink} from '../atoms'
import cloudinary from "../cloudinary"
import styled, {css} from 'styled-components';
import {position, bottom, left, space} from 'styled-system';
import {CategoryList} from '../components';
import {DEFAULT_PROJECT_COVER, normalizeName} from "../utils";

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

export const PROJECT_CARD_RATIO = .73;
const CARD_X_PADDING = '40px';
const CARD_Y_PADDING = '24px';

const Industries = styled(({industries, className}) => <Subtitle {...{className}}>
  {industries?.join(', ')}
</Subtitle>)`
  ${position};
  ${bottom};
  ${space};
  color: white;
  padding: 0 ${CARD_X_PADDING};
`

const IMAGE_PATH = 'site/project'
const getImageUrl = (name) => {
  const normalized = normalizeName(name)
  return cloudinary.url(`${IMAGE_PATH}/${normalized}`, {width: 550, crop: "scale"})
}

const cover = css`
  white-space: normal;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
`

const preventDefault = (e) => {
  e.preventDefault()
}

const HoverProjectCard = styled(({project, className}) => <div {...{className}}>
  <HoverTitle mt={'32px'}>{project.data.title}</HoverTitle>
  <Subtitle mt={1} px={CARD_X_PADDING}>{project.data.description}</Subtitle>
  <Industries mt={2} industries={project.data.industries}/>
  <CategoryList small position='absolute' bottom={CARD_Y_PADDING}
            left={CARD_X_PADDING} categories={(project.data.techs || []).map(t => ({data: {title: t, slug: t}}))}/>
</div>)`
  ${cover};
  background-color: ${p => p.theme.colors.gray[0]};
`


const ProjectCard = ({project, className}) => <StyledLink className={className} onDragStart={preventDefault} to={`/portfolio/projects/${project.data.slug}`}>
  <AspectBox ratio={PROJECT_CARD_RATIO}>
    <HoverProjectCard {...{project}}/>
    <VoidProjectCard {...{project}}/>
  </AspectBox>
</StyledLink>


const StyledProjectCard = styled(ProjectCard)`
  position: relative;
  overflow: hidden;
  outline: none;
`

const VoidProjectCard = styled(({project, className}) => <div {...{className}}>
  <Title position='absolute' left='0' bottom='56px'>{project.data.title}</Title>
  <Industries position='absolute' bottom={CARD_Y_PADDING} industries={project.data.industries}/>
</div>)`
  ${cover};
  background-color: ${p => p.theme.colors.gray[0]};
  background-image: ${p => `url('${getImageUrl( p.project.data.cover || DEFAULT_PROJECT_COVER)}')`};
  background-size: cover;
  transition: opacity .5s;
    
  opacity: 1;
  ${StyledProjectCard}:hover & {
    opacity: 0;
  }
  
  &:before {
    content: '';
    ${cover};
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.90)); 
  }
`

export default StyledProjectCard;
