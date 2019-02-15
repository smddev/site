import React from "react";
import {Link1} from "../atoms";
import {space} from 'styled-system';
import styled from 'styled-components';

export default styled(({big, className}) => {
    const email = 'info@smddev.com';
    const props = {
        fontSize: big ? 24 : 16,
        className
    }
    return <Link1 href={`mailto:${email}`} {...props}>
        {email}
    </Link1>
})`
  ${space}
`