import React, {Component} from 'react';
import {PhoneLink, EmailLink} from '../components';
import {withSiteData, withRouteData} from "react-static";
import {Button, H1, Input, Subtitle, Container, NavLink, withBackground} from '../atoms';
import styled from 'styled-components';
import {Flex, Box} from '@rebass/grid';
import {space} from 'styled-system';
import background from '../calculateCost.svg'
import {EmailContext, validateEmail} from "../utils";
import {navigate} from '@reach/router'

const Description = styled(Subtitle)`width: 90%`;
const Email = styled(Input)`
  padding:0 0 16px 0;
  &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px ${p => p.theme.colors.gray[3]} inset !important;
    }
        
`;

class EForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.email
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState(ps => ({
            ...ps,
            email: value
        }))
    }

    processSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {email} = this.state;
        const {changeEmail} = this.props;
        if (validateEmail(email)) {
            changeEmail(email);
            navigate('/contacts');
        }
    }

    render() {
        const {className} = this.props;
        const {email} = this.state;
        return <div {...{className}}>
            <Email value={email} onChange={this.handleChange} type={'email'} name="email" placeholder={'Your email'}/>
            <Button disabled={!validateEmail(email)} onClick={this.processSubmit} mt={'48px'}>Calculate Cost</Button>
        </div>
    }
}

const EmailForm = styled(EForm)`
  ${space}
`;


const CalculateCost = withBackground(background, 1957, 415)(styled(({className}) => <Container {...{className}}>
    <Box width={1/2} pr={'40px'}>
        <H1 mt={'104px'}>Calculate the cost of the project</H1>
        <Description>The price is calculated individually depending on the complexity,
            volume and terms of work. Usually the project involves an analyst, designer, developers,
            testers and project Manager.
        </Description>
    </Box>
    <EmailContext.Consumer>
        {(context) =>
            <Box width={1 / 2} pl={'120px'}>
                <EmailForm mt={'136px'} {...context}/>
            </Box>
        }
    </EmailContext.Consumer>
</Container>)`
  position: relative;
  height: 415px;
`)`
    top: 0;
    left: 50%;
    margin-left: calc(-1957px/2);
`


const Link = styled(NavLink)`
    &:not(:first-child) {
      margin-left: ${props => props.theme.space[5] + 'px'}
    }
`

const Routes = styled(withSiteData(({routes, className})=><div {...{className}}>
    {routes && routes.map(r => <Link key={r.name} to={r.path}>{r.name}</Link>)}
</div>))`
  display: inline-flex;
`

const Contacts = styled(({className}) => <div {...{className}}>
    <PhoneLink big/>
    <EmailLink big/>
</div>)`>*:not(:last-child) {margin-right: 55px}`

const FooterContacts = styled(({className}) => <Container {...{className, alignItems:'center', justifyContent:'space-between'}}>
    <Contacts />
    <Routes />
</Container>)`
  ${space};
`

const Copyright = styled(({className}) => <Container {...{className}}>
    <Subtitle>© 2018 smmdev.com. All rights reserved.</Subtitle>
</Container>)`${space}`

export default styled(({noForm, className}) => <div {...{className}}>
    {!noForm && <CalculateCost/>}
    <FooterContacts mt={7}/>
    <Copyright mt={3}/>
</div>)`
  ${space}
`