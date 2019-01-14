import React from 'react'
import {withRouteData} from 'react-static'
import {TeamGallery} from "../components/galleries";
import {H1} from "../atoms";

export default withRouteData(({members}) => (
    <div>
        <H1>Our team</H1>
        <TeamGallery members={members}/>
    </div>
))
