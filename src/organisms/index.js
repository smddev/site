import React, {Fragment, useEffect} from "react";

import Services from './Services'
import Industries from './Industries'
import Stages from './Stages'
import Feedback from './Feedback'
import RecentProjects from './RecentProjects'
import Footer from './Footer'
import MembersGallery from './MembersGallery'
import NavBar from "./NavBar";

export {
    Services,
    Industries,
    Stages,
    Feedback,
    RecentProjects,
    Footer,
    MembersGallery
};

export const withLayout = (props) => (WrappedComponent) => {
    const {noFooter, noForm, noNav} = props || {};
    return props => {
        useEffect(()=>{if (typeof window !== 'undefined') {window.scrollTo(0,0)}}, [])
        return <Fragment>
            {!noNav && <NavBar/>}
            <WrappedComponent {...props}/>
            {!noFooter && <Footer mt={10} mb={6} {...{noForm}}/>}
        </Fragment>
    }
};