import React, { useState } from 'react';
import {PhoneLink, EmailLink} from '../components';
import {withSiteData, withRouteData} from "react-static";
import {Button, H1, Input, Subtitle, Container, NavLink, withBackground} from '../atoms';
import styled from 'styled-components';
import {Flex, Box} from '@rebass/grid';
import {space} from 'styled-system';
import background from '../calculateCost.svg'
import backgroundMobile from '../calculateCostMobile.svg'
import {YEAR} from "../utils";
import {navigate} from '@reach/router';
import { FormattedMessage, useIntl } from 'react-intl'
import LinkedIn from '../icons/LinkedIn';

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

const EForm = ({ className, changeEmail, ...props }) => {
  const [email, setEmail] = useState(props.email)
  const { formatMessage } = useIntl()

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const processSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    navigate('/contacts');
    
  }

  return <div { ...{ className } }>
    <Button onClick={ processSubmit }
            mt={ ['35px', '35px', '35px', '35px', '48px'] }>
      <FormattedMessage id="message.calculate.cost"/>
    </Button>
  </div>
}

const EmailForm = styled(EForm)`
  ${space}
`;

const SB = styled(Box)`
  position: absolute;
  bottom: 140px;
  left: 16px;
  right: 16px;
  @media(min-width: ${p => p.theme.breakpoints[3]}) {
    position: initial;
  }
`


const CalculateCost = withBackground(background, 1957, 415, true)(withBackground(backgroundMobile, 1329, 511)(styled(({className}) =>
  <Container {...{className}}>
    <Box width={[1, 1, 1, 1, 1 / 2]} pr={'40px'}>
      <H1 mt={['40px', '60px', '60px', '80px', '104px']}>
        <FormattedMessage id='message.calculate.project.cost'/>
      </H1>
      <Description>
        <FormattedMessage id='message.calculate.description'/>
      </Description>
    </Box>
    <SB width={['auto', 'auto', 'auto', 'auto', 1 / 2]}
        pl={['0px', '0px', '0px', '0px', '120px']}
        position={['absolute']}>
      <EmailForm mt={[4, 4, 4, 4, '136px']} />
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
    white-space: nowrap;
    
    
    &:not(:first-child) {
      margin-left: ${props => props.theme.space[3] + 'px'}
    }
    
    @media (min-width:  ${p => p.theme.breakpoints[1]}) {
      &:not(:first-child) {
        margin-left: ${props => props.theme.space[5] + 'px'}
      }
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

const StyledLinkedInLink = styled.a`
  display: inline-block;
  color: ${p => p.theme.colors.white}; /* Match email text color */
  margin-left: 20px; /* Add spacing between icons */
  transition: color 0.3s;

  &:hover {
    color: ${p => p.theme.colors.gray[2]}; /* Add hover effect */
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #0077B5; /* Standard LinkedIn blue */
    transition: fill 0.3s;

    &:hover {
      fill: #005582; /* Darker LinkedIn blue on hover */
    }
  }
`;


const Contacts = styled(({className}) => <div {...{className}}>
  <SE/>
  <StyledLinkedInLink
      href="https://www.linkedin.com/company/5075534"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedIn />
    </StyledLinkedInLink>
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
  <Routes/>
</Container>)`
  ${space};
`

const Copyright = styled(({className}) => {
  return <Container {...{className}}>
    <Subtitle>© {YEAR} Smart Design. <FormattedMessage id='message.copyright'/></Subtitle>
  </Container>
})`${space}`

export default styled(({noForm, className}) => <div {...{className}}>
  {!noForm && <CalculateCost/>}
  <FooterContacts mt={7}/>
  <Copyright mt={3}/>
</div>)`
  ${space}
`