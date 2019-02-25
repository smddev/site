import React from 'react'
import Gallery from "./Gallery";
import Card from "./Card";
import Icon, {HexIcon} from "./Icon";
import List from "./List";
import MemberCard from "./MemberCard";
import Fact from "./Fact";
import PhoneLink from "./PhoneLink";
import EmailLink from "./EmailLink";
import SideNav from "./SideNav";
import Tech from "./Techs";
import Carousel from "./Carousel";
import {default  as Mrkdn} from "react-markdown";
import styled from "styled-components";
import {position, bottom, left} from "styled-system";

import ProjectCard, {PROJECT_CARD_RATIO} from "./ProjectCard";

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

export const TeamGallery = ({members, category}) =>
    <Gallery items={members.filter(m => filterByTag(m, 'category', category))}>
        <MemberCard basePath='/members' imagePath={'site/member'}/>
    </Gallery>

export const PortfolioList = ({items, filterBy, includes, vertical, color, iconSize, bg, mt, mx}) =>
    <List items={items} linkPath={`/portfolio?${filterBy}=`}
          includes={includes} vertical={vertical}>
        <Icon vertical={!vertical} {...{color, bg, mt, mx, size:iconSize}}/>
    </List>

export const IndustryList = (props) =>
    <PortfolioList items={props.industries} filterBy='industry' {...props}/>

export const ServiceList = (props) =>
    <List items={props.services} linkPath={`/portfolio?service=`}>
        <HexIcon {...props}/>
    </List>

export const TechList = styled(({className, ...props}) =>
    <List items={props.techs} includes={props.techIds} className={className} linkPath={`/portfolio?tech=`}>
        <Tech {...props}/>
    </List>)`
  ${position}
  ${bottom}
  ${left}
`

export const Markdown = (props) => <Mrkdn className={'markdown'} {...props}/>

export {Fact, ProjectCard, PROJECT_CARD_RATIO, PhoneLink, EmailLink, SideNav, Carousel}