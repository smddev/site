import React from 'react'
import {Link} from 'react-static'
import Gallery from "./Gallery";
import Card from "./Card";

export const Galleries = ({projects}) =>
    <Gallery items={projects}>
        <Card basePath='/portfolio/projects'/>
    </Gallery>


export const TeamGallery = ({members}) =>
    <Gallery items={members}>
        <Card basePath='/members'/>
    </Gallery>
