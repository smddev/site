import React from "react";
import {Text, Link1} from "../atoms";
import styled from "styled-components";

export default styled(({big, className}) => {
    const props = {
        fontSize: big ? 24 : 16,
        className
    }
    return <Link1 href="tel:+78129327150" {...props}>
        <Text >+7</Text><Text mx={1}>(812)</Text><Text fontWeight={'700'}>932-71-50</Text>
    </Link1>
})`
  white-space: nowrap;
`