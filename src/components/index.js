import React from 'react'
import Gallery from "./Gallery";
import Card from "./Card";
import Icon from "./Icon";
import List from "./List";
import MemberCard from "./MemberCard";

export const ProjectGallery = ({projects}) =>
    <Gallery items={projects}>
        <Card basePath='/portfolio/projects' imagePath={'site/project'}/>
    </Gallery>

export const TeamGallery = ({members}) =>
    <Gallery items={members}>
        <MemberCard basePath='/members' imagePath={'site/member'}/>
    </Gallery>

const PortfolioList = ({items, filterBy, includes, vertical, color, bg}) =>
    <List items={items} linkPath={`/portfolio?${filterBy}=`}
          includes={includes} vertical={vertical}>
        <Icon vertical={!vertical} {...{color, bg}}/>
    </List>

export const IndustryList = (props) =>
    <PortfolioList items={props.industries} filterBy='industry' {...props}/>

export const ServiceList = (props) =>
    <PortfolioList items={props.services} filterBy='service' {...props}/>
