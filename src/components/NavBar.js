import React from 'react'
import {withSiteData} from "react-static";
import {Link} from '@reach/router'
import {Box, Flex} from '@rebass/grid'
import styled from 'styled-components'
import logoImg from 'logo_big.png'
import {NavLink} from "../atoms";


const Logo = styled.img`
  height: 42px;
`

export default withSiteData(({routes}) => {
    return <Flex flexWrap='wrap'>
        <Box width={1 / 4}>
            <Link to={'/'}><Logo src={logoImg} alt="Smart Design"/></Link>
        </Box>
        <Box width={3 / 4}>
            <Flex justifyContent='center'>
                {
                    routes && routes.map(r =>
                        <Box p={2} key={r.name}>
                            <NavLink to={r.path} fontFamily='narrow'>{r.name}</NavLink>
                        </Box>)
                }
            </Flex>
        </Box>
    </Flex>
})

