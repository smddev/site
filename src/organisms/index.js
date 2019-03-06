import React, {Fragment} from "react";

import Services from './Services'
import Facts from '../components/Facts'
import Industries from './Industries'
import Stages from './Stages'
import Feedback from './Feedback'
import RecentProjects from './RecentProjects'
import Footer from './Footer'
import MembersGallery from './MembersGallery'
import NavBar from "./NavBar";

export {
    Services,
    Facts,
    Industries,
    Stages,
    Feedback,
    RecentProjects,
    Footer,
    MembersGallery
};

export const withLayout = (props) => (WrappedComponent) => {
    const {noFooter, noForm, noNav} = props || {};
    return props => <Fragment>
        {!noNav && <NavBar/>}
        <WrappedComponent {...props}/>
        {!noFooter && <Footer mt={10} mb={6} {...{noForm}}/>}
    </Fragment>
}