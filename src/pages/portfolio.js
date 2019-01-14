import React from 'react'
import {withRouteData} from 'react-static'
import {Galleries} from "../components/galleries";
import {H1} from "../atoms";

export default withRouteData(({projects}) => (
    <div>
        <H1>Our projects</H1>
        <Galleries projects={projects}/>
    </div>
))
