import React, {Fragment} from 'react'
import NavBar from "../components/NavBar";


export default (Comp) => () =>
    <Fragment>
        <NavBar/>
        <Comp/>
    </Fragment>