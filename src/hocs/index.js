import {Container} from "../atoms";
import {Box} from "@rebass/grid";
import React from "react";
import SideNav from "../components/SideNav"


export const withSidebar = (WrappedComponent) =>  props => <Container>
    <Box mt={6} width={[1, 1, 2 / 3, 1 / 2, 2 / 3]}>
        <WrappedComponent {...props}/>
    </Box>
    <Box width={[1, 1, 1 / 3, 1 / 2, 1 / 3]}>
        <SideNav ml={['0px', '0px', '60px', '120px', '120px']} {...props}/>
    </Box>
</Container>