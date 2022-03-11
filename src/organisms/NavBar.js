import React, {Component} from 'react'
import {withSiteData} from "react-static";
import {Link} from '@reach/router'
import {Box, Flex} from '@rebass/grid'
import styled from 'styled-components'
import logoImg from 'logo-white.png'
import {EmailLink} from '../components'
import {ArrowLink, MenuButton, Container, NavLink, withBackground} from '../atoms'
import background from '../navbar.svg'

const NavContainer = styled(Container)`
  flex-wrap: wrap;
  align-items: center;
  background-color: ${p => p.theme.colors.black[0]};
  height: 50px;
  
  @media(min-width: 870px) {
    height: 100px;
  }
`


const NavBar_Link = styled(NavLink)`
    line-height: 40px;
    @media(min-width: 870px) {
      &:not(:first-child) {
        margin-left: ${props => props.theme.space[5] + 'px'}
      }
    }
    
`

const NavBar_Logo = styled((props) => <Link {...props} to={'/'}>
    <img src={logoImg} alt="Smart Design"/>
</Link>)`
  height: 32px;
  margin-right: ${props => props.theme.space[5] + 'px'};
  position: relative;
  z-index: 4;
`

const NavBar_ArrowLink = styled((props)=>
    <ArrowLink
        getProps={({isCurrent}) => ({
            style: {display: isCurrent ? 'none' : 'flex'}
        })}
        {...props}/>)`
  line-height: 40px;
  svg {
    height: 37px;
  }
  @media(min-width: 870px) {
    margin-left: ${props => props.theme.space[7] + 'px'};
  }
`

const Sandwich = styled(MenuButton)`
  position: absolute;
  z-index: 5;
  right: 16px;
  top: 10px;
  
  @media(min-width: 870px) {
    display: none;  
  }
`

const Email = styled(EmailLink)`
  margin-right: auto;
  line-height: 40px;
  padding-top:1px;
  font-size: ${p => p.theme.fontSizes[10]}px
`

const NavBar_Collapse = styled.div`
  display:flex;
  flex-grow: 100;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  background-color:  ${p => p.theme.colors.black[0]};
  position: absolute;
  z-index: 2;
  width: 100%;
  left:0;
  bottom: 0;
  padding: 0 15px 10px;
  box-sizing: border-box;
  transform: translateY(${p => p.collapsed ? 0 : '100%'});
  
  @media(min-width: 870px) {
    transform: translateY(0);
    position: relative;
    z-index: inherit;
    flex-direction: row;
    justify-content: flex-end;
    left:auto;
    bottom: auto;
    width: auto;
    padding: 0;
  }
`

const NavBar_Back = styled.div`
  height: 50px;
  background-color: ${p => p.theme.colors.black[0]};
  position: absolute;
  left:0;
  width: 100%;
  z-index: 3;
  
  @media(min-width: 870px) {
    display: none;
  }
`

const NavBar_Backdrop = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: ${p => p.collapsed? -1 : 2};
    background-color: ${p => p.collapsed? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)'};
    
    transition: ${p => p.collapsed? 'background-color .3s, z-index 0s .3s': 'background-color .3s'};
`

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        }
    }

    handleCollapse = (e) => {
        this.setState(ps => ({
            ...ps,
            collapsed: !ps.collapsed
        }))
    }

    render() {
        const {routes, className} = this.props;
        const {collapsed} = this.state;
        return <NavContainer {...{className}}>
            <NavBar_Logo/>
            <NavBar_Back/>
            <NavBar_Backdrop {...{collapsed}}/>
            <NavBar_Collapse {...{collapsed}}>
                <Email/>
                {routes && routes.map(r =>
                    <NavBar_Link key={r.name} to={r.path} fontFamily='ru'>{r.name}</NavBar_Link>
                )}
                <NavBar_ArrowLink to={'/contacts'}>Отправить заявку</NavBar_ArrowLink>
            </NavBar_Collapse>
            <Sandwich {...{collapsed}} onClick={this.handleCollapse}/>
        </NavContainer>
    }
}

export default withBackground(background, 208, 361)(styled(withSiteData(NavBar))`
  position: relative;
`)`
    right:-350px;
    top:-35px;
`;

