import React from 'react'
import Gallery from "./Gallery";
import Card from "./Card";
import Icon, {HexIcon} from "./Icon";
import List from "./List";
import Fact from "./Fact";
import {CombinedFacts, FactsCarousel} from "./Facts";
import PhoneLink from "./PhoneLink";
import Tech from "./Tech";
import Carousel from "./Carousel";
import VerticalCarousel from "./VerticalCarousel";
import {default as Mrkdn} from "react-markdown";
import styled from "styled-components";
import {position, bottom, left, space} from "styled-system";
import {Envelop} from '../icons'
import bg from '../servicesHex.svg'
import Photo from './Photo';
import Photos from './Photos';
import Review from './Review';
import Reviews from './Reviews';

import {yellowLinkStyles, Link1, Description, Button, withBackground, H1WithBackground, Container} from "../atoms";
import {Box} from "@rebass/grid";
import { FormattedMessage } from 'react-intl'

function filterByTag(item, tagName, tagValue) {
  return tagValue ? (item.data[tagName] && item.data[tagName].includes(tagValue)) : true
}

export const filterBy = ({industry, service, tech}) => (project) => {

  return filterByTag(project, 'industries', industry) &&
    filterByTag(project, 'services', service) &&
    filterByTag(project, 'techs', tech)
}

export const ProjectGallery = ({projects, industry, service, tech}) => {
  const selectedProjects = projects.filter(filterBy({industry, service, tech}))
  return <Gallery items={selectedProjects}>
    <Card basePath='/portfolio/projects' imagePath={'site/project'}/>
  </Gallery>
}

export const MembersGallery = ({members, category}) =>
  <Gallery items={members.filter(m => filterByTag(m, 'category', category))}>
    <MemberCard basePath='/members' imagePath={'site/member'}/>
  </Gallery>

export const PortfolioList = ({items, filterBy, includes, vertical, color, iconSize}) =>
  <List items={items} linkPath={`/portfolio?${filterBy}=`} {...{filterBy}}
        includes={includes} vertical={vertical}>
    <Icon vertical={!vertical} {...{color, size: iconSize}}/>
  </List>

export const IndustryList = (props) =>
  <PortfolioList items={props.industries} filterBy='industry' {...props}/>

export const ServiceList = (props) =>
  <List items={props.services} vertical={true} linkPath={`/portfolio?service=`} filterBy={'service'}>
    <HexIcon {...props}/>
  </List>

export const ExpertiseList = (props) =>
    <PortfolioList items={props.expertises} filterBy='expertise' {...props}/>

export const TechList = styled(({className, ...props}) =>
  <List flexDirection={'row'} items={props.techs} includes={props.techIds} vertical={true}
        className={className} linkPath={`/portfolio?tech=`} filterBy={'tech'}>
    <Tech {...props}/>
  </List>)`
  ${position}
  ${bottom}
  ${left}
`

// export const ReasonsList = styled(
//   ({className, ...props}) => <List flexDirection={'column'} items={props.reasons} includes={props.techIds} vertical={true}
//                                    className={className} linkPath={`/portfolio?tech=`} filterBy={'tech'}>
//
//   </List>
// )``

export const Markdown = (props) => <Mrkdn className={'markdown'} {...props}/>


const EmailLinkCommon = ({className, email, children}) => {
  return <Link1 {...{className}} href={`mailto:${email}`}>
    {children}
    {email}
  </Link1>
}

export const EmailLink = styled((props) =>
  <EmailLinkCommon {...props} email={'info@smddev.com'}/>)`
  font-size: ${p => p.big ? '24px' : '16px'};
`

export const StyledEmailLink = styled((props) => <EmailLinkCommon {...props}>
  <StyledEnvelop/>
</EmailLinkCommon>)`
  padding-left: 30px;
  position: relative;
  line-height: 24px;
  display: block;
  ${yellowLinkStyles};
  ${space};
`

const StyledEnvelop = styled(Envelop)`
  position: absolute;
  left:0;
  top: 7px;
  fill: ${p => p.theme.colors.orange[1]};
  transition: fill .5s;
  
  ${StyledEmailLink}:hover & {
    fill: ${p => p.theme.colors.orange[2]};
  }
  
  ${StyledEmailLink}:active & {
    fill: ${p => p.theme.colors.orange[3]};
  }
`

export const BackToSite = withBackground(bg, 703, 631)(styled(({className, children}) => (
  <div {...{className}}>
    <Description as={'div'}>
      <p>{children}</p>
      <p><FormattedMessage id='message.back.site'/></p>
    </Description>

    <Button mt={6} to={'/'}><FormattedMessage id='message.back.link'/></Button>
  </div>
))`
    padding-left: 24px;
    padding-right: 24px;
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    min-height: 100vh;
    ${space};
`)`
left: -120px;
top: 50%;
margin-top: -350px
`

export {Fact, CombinedFacts, FactsCarousel, PhoneLink, Carousel, VerticalCarousel, Photo, Photos, Review, Reviews}