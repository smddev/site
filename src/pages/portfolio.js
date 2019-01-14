import React from 'react'
import {withRouteData} from 'react-static'
import Gallery from "../components/Gallery";
import framed from "../templates/framed";

export default framed(withRouteData(({projects}) => (
    <div>
        <h1>Our projects</h1>
        <Gallery items={projects} itemsPath={'/portfolio/projects'}/>
    </div>
)))
