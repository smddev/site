import React from 'react'
import {withRouteData} from 'react-static'
import {ProjectGallery} from "../components";
import {H1} from "../atoms";
import {withRouter} from "react-router";
import queryString from 'query-string'
import {Flex} from "@rebass/grid";


export default withRouter(withRouteData(({projects, location}) => {
    const query = queryString.parse(location.search)
    return <div>
        <Flex justifyContent='center'>
            <H1>Our projects</H1>
        </Flex>
        <ProjectGallery projects={projects}
                        industry={query.industry}
                        service={query.service}
                        tech={query.tech}/>
    </div>
}))
