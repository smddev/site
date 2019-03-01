import React from 'react';
import {Button, Description} from '../atoms';
import styled from "styled-components";
import {space} from "styled-system";

export default styled(({className}) => (
    <div {...{className}}>
        <Description as={'div'}>
            Your request was successfully submitted.<br/>
            Follow the link below to return to the site.
        </Description>

        <Button mt={6} to={'/'}>Back to site</Button>
    </div>
))`
    padding-left: 24px;
    padding-right: 24px;
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    min-height: 100vh;
    ${space};
`
