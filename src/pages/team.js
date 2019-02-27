import React from 'react'
import {withRouteData} from 'react-static'
import {MembersGallery} from "../components";
import {H1} from "../atoms";

export default withRouteData(({members}) => (
    <div>
        <H1>Our team</H1>
        <MembersGallery members={members}/>
    </div>
))
