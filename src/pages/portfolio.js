import React from 'react'
import {withRouteData} from 'react-static'
import {ProjectGallery} from "../components";
import {H1} from "../atoms";

export default withRouteData(({projects}) => (
    <div>
        <H1>Our projects</H1>
        <ProjectGallery projects={projects}/>
    </div>
))
