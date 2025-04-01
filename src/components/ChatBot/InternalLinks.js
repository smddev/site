import { Link } from '@reach/router';
import React from 'react'
import styled from 'styled-components';
import {space} from 'styled-system';
import { motion } from "framer-motion";

const LinkBody = styled(Link)`
    color: white;
    padding: 10px;
    border-radius: 30px;
    background-color: ${p => p.theme.colors.orange[3]};
    text-decoration: none;
    font-size: 14px;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Body = styled(motion.div)`
    ${space}
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    flex-direction: row-reverse;
    gap: 10px;
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
        <Body 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            {...rest}
        >
            {value.map((v) => <InternalLink value={v}/>)}
        </Body>

    )
}



export default InternalLinks;