import React from 'react'
import {Link as RSLink, withRouteData} from "react-static";
import {Box, Flex} from '@rebass/grid'
import styled from 'styled-components'
import logoImg from 'logo_big.png'
import {Link} from "../atoms";


const Logo = styled.img`
  height: 42px;
`

export default withRouteData(({routes}) =>
    <Flex flexWrap='wrap'>
        <Box width={1 / 4}>
            <RSLink to={'/'}><Logo src={logoImg} alt="Smart Design"/></RSLink>
        </Box>
        <Box width={3 / 4}>
            <Flex justifyContent='center'>
                {
                    routes.map(r =>
                        <Box p={2} key={r.name}>
                            <Link to={r.path}>{r.name}</Link>
                        </Box>)
                }
            </Flex>
        </Box>
    </Flex>)