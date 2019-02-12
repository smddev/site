import React from 'react'
import Gallery from "./Gallery";
import Card from "./Card";
import Icon from "./Icon";
import List from "./List";
import MemberCard from "./MemberCard";
import Fact from "./Fact";

function filterBy(item, tagName, tagValue) {
    return tagValue ? (item.data[tagName] && item.data[tagName].includes(tagValue)) : true
}

export const ProjectGallery = ({projects, industry, service, tech}) => {
    const selectedProjects = projects.filter(p =>
        filterBy(p, 'industries', industry) &&
        filterBy(p, 'services', service) &&
        filterBy(p, 'tech', tech))
    return <Gallery items={selectedProjects}>
        <Card basePath='/portfolio/projects' imagePath={'site/project'}/>
    </Gallery>
}

export const TeamGallery = ({members, category}) =>
    <Gallery items={members.filter(m => filterBy(m, 'category', category))}>
        <MemberCard basePath='/members' imagePath={'site/member'}/>
    </Gallery>

export const PortfolioList = ({items, filterBy, includes, vertical, color, bg, mt, mx}) =>
    <List items={items} linkPath={`/portfolio?${filterBy}=`}
          includes={includes} vertical={vertical}>
        <Icon vertical={!vertical} {...{color, bg, mt, mx}}/>
    </List>

export const ServiceList = (props) =>
    <PortfolioList items={props.services} filterBy='service' {...props}/>

export {Fact}