import React from 'react'
import {withRouteData} from 'react-static'
import Gallery from "../components/Gallery";

export default withRouteData(({data}) => (
    <div>
        <h1>Our team</h1>
        <Gallery items={data.members} itemsPath={'/portfolio/members'}/>
    </div>
))
