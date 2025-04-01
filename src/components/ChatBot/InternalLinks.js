import { Link } from '@reach/router';
import React from 'react'
import styled from 'styled-components';
import {space} from 'styled-system';

const LinkBody = styled(Link)`
    color: white;
    padding: 10px;
    border-radius: 30px;
    background-color: ${p => p.theme.colors.orange[3]};
    margin-left: auto;
    margin-top: 10px;
    text-decoration: none;
    font-size: 14px;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Body = styled.div`
    ${space}
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
`

function InternalLink({ value }) {
    const { metadata } = value;
    const { source, title } = metadata;
    return (
        <LinkBody title={title} to={source}>{title}</LinkBody>
    )
}

function InternalLinks({ value, ...rest }) {
    return (
        <Body {...rest}>
            {value.map((v) => <InternalLink value={v}/>)}
        </Body>

    )
}



export default InternalLinks;