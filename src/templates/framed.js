import React, {Fragment} from 'react'
import NavBar from "../organisms/NavBar";


export default (Comp) => () =>
    <Fragment>
        <NavBar/>
        <Comp/>
    </Fragment>