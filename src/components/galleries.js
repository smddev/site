import React from 'react'
import Gallery from "./Gallery";
import Card from "./Card";

export const ProjectGallery = ({projects}) =>
    <Gallery items={projects}>
        <Card basePath='/portfolio/projects'/>
    </Gallery>


export const TeamGallery = ({members}) =>
    <Gallery items={members}>
        <Card basePath='/members'/>
    </Gallery>
