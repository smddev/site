import React from 'react'
import {withRouteData} from 'react-static'
import Gallery from "../components/Gallery";

export default withRouteData(({members}) => (
    <div>
        <h1>Our team</h1>
        <Gallery items={members} itemsPath={'/portfolio/members'}/>
    </div>
))
