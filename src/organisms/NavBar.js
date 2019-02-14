import React from 'react'
import {withSiteData} from "react-static";
import {Link} from '@reach/router'
import {Box, Flex} from '@rebass/grid'
import styled from 'styled-components'
import logoImg from 'logo-white.png'
import {NavLink} from "../atoms/index";
import {PhoneLink} from '../components'
import ArrowLink from '../atoms/ArrowLink'
import Container from '../atoms/Container'

const Logo = styled.img`
  height: 32px;
`

const Column = styled(Flex)`
    width: 50%;
    align-items: center;
`

const NavBar_Link = styled(NavLink)`
    &:not(:first-child) {
      margin-left: ${props => props.theme.space[5] + 'px'}
    }
`

const NavBar_Logo = styled(Logo)`
    margin-right: ${props => props.theme.space[5] + 'px'}
`

const NavBar_ArrowLink = styled(ArrowLink)`
    margin-left: ${props => props.theme.space[7] + 'px'};
`

export default withSiteData(({routes}) => {
    return <Container height={100}>
        <Column>
            <Link to={'/'}>
                <NavBar_Logo src={logoImg} alt="Smart Design"/>
            </Link>
            <PhoneLink/>
        </Column>
        <Column justifyContent={'flex-end'}>
            {routes && routes.map(r =>
                <NavBar_Link key={r.name} to={r.path} fontFamily='base'>{r.name}</NavBar_Link>
            )}
            <NavBar_ArrowLink>Send request</NavBar_ArrowLink>
        </Column>
    </Container>
})

