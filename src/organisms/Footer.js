import React, {Component} from 'react';
import {PhoneLink, EmailLink} from '../components';
import {withSiteData, withRouteData} from "react-static";
import {Button, H1, Input, Subtitle, Container, NavLink, withBackground} from '../atoms';
import styled from 'styled-components';
import {Flex, Box} from '@rebass/grid';
import {space} from 'styled-system';
import background from '../calculateCost.svg'
import backgroundMobile from '../calculateCostMobile.svg'
import {EmailContext, validateEmail} from "../utils";
import {navigate} from '@reach/router'

const Description = styled(Subtitle)`width: 90%`;
const Email = styled(Input)`
  padding:0 0 10px 0;
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px ${p => p.theme.colors.gray[3]} inset !important;
  }
  @media(max-width: 400px) {
   margin-bottom: -10px;
  }
  @media(min-width: ${p => p.theme.breakpoints[3]}) {
    padding-bottom: 16px;
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
      <Button disabled={!validateEmail(email)} onClick={this.processSubmit}
              mt={['35px', '35px', '35px', '35px', '48px']}>Calculate Cost</Button>
    </div>
  }
}

const EmailForm = styled(EForm)`
  ${space}
`;

const SB = styled(Box)`
  position: absolute;
  bottom: 80px;
  left: 16px;
  right: 16px;
  @media(min-width: ${p => p.theme.breakpoints[3]}) {
    position: initial;
  }
`


const CalculateCost = withBackground(background, 1957, 415, true)(withBackground(backgroundMobile, 1329, 511)(styled(({className}) =>
  <Container {...{className}}>
    <Box width={[1, 1, 1, 1, 1 / 2]} pr={'40px'}>
      <H1 mt={['40px', '60px', '60px', '80px', '104px']}>Calculate the cost of the project</H1>
      <Description>The price is calculated individually depending on the complexity,
        volume and terms of work. Usually the project involves an analyst, designer, developers,
        testers and project Manager.
      </Description>
    </Box>
    <SB width={['auto', 'auto', 'auto', 'auto', 1 / 2]}
        pl={['0px', '0px', '0px', '0px', '120px']}
        position={['absolute']}>
      <EmailContext.Consumer>
        {(context) =>
          <EmailForm mt={[4, 4, 4, 4, '136px']} {...context}/>
        }
      </EmailContext.Consumer>
    </SB>
  </Container>)`
  position: relative;
  height: 511px;
`)`
   left:-20px;
   top: 0;
   @media(min-width: ${p => p.theme.breakpoints[3]}) {
    display: none;
   }
`)`
    top: 0;
    left: 50%;
    margin-left: calc(-1957px/2);
    display: none;
    @media(min-width: ${p => p.theme.breakpoints[3]}) {
       display: block;
   }
`


const Link = styled(NavLink)`
    &:not(:first-child) {
      margin-left: ${props => props.theme.space[5] + 'px'}
    }
`

const Routes = styled(withSiteData(({routes, className}) => <div {...{className}}>
  {routes && routes.map(r => <Link key={r.name} to={r.path}>{r.name}</Link>)}
</div>))`
  display: inline-flex;
`

const SE = styled(EmailLink)`
  display: inline-block;
`

const Contacts = styled(({className}) => <div {...{className}}>
  <PhoneLink big/>
  <SE/>
</div>)`
  width: 100%;
  margin-bottom: 30px;
  
  @media(min-width: ${p => p.theme.breakpoints[0]}) {
    width: auto;
    margin-bottom: 0;
  }
  
  >* {
  margin-right: 55px
}`

const FooterContacts = styled(({className}) => <Container {...{
  className,
  alignItems: 'baseline',
  justifyContent: 'space-between'
}}>
  <Contacts/>
  <Routes onClick={ () => { window.scrollTo(0, 0); }}/>
</Container>)`
  ${space};
`

const Copyright = styled(({className}) => <Container {...{className}}>
  <Subtitle>© 2019 smddev.com. All rights reserved.</Subtitle>
</Container>)`${space}`

export default styled(({noForm, className}) => <div {...{className}}>
  {!noForm && <CalculateCost/>}
  <FooterContacts mt={7}/>
  <Copyright mt={3}/>
</div>)`
  ${space}
`