import React, {Fragment, Component} from 'react'
import {withRouteData} from 'react-static'
import {Button, Container, H1, H1WithBackground, Link1, Subtitle, Input, Textarea} from "../atoms";
import {Footer, withLayout} from "../organisms";
import {Box, Flex} from "@rebass/grid";
import Envelop from "../envelop.svg";
import Phone from "../phone.svg";
import styled from "styled-components";
import {space, width} from "styled-system";
import {validateEmail, EmailContext} from "../utils";

const IconLink = styled(Link1)`
  position: relative;
  display: inline-block;
  font-size: 20px;
  padding-top: 60px;
  min-width: 150px;
  &:before {
    content: '';
    position: absolute;
    width:46px;
    height: 40px;
    top: 0;
    left: 50%;
    margin-left: -23px;
    background-repeat: no-repeat;
    background-image: url(${p => p.image});
  }
  @media(max-width: ${p => p.theme.breakpoints[0]}) {
    &:before { 
        width:46px;
        height: 40px;
        left: -50px;
        top: 10px;
        margin-left: 0px;
        background-size: 25px;
        background-position: left center;
      }
      padding-top: 20px;
      margin-left: 50px;
      text-decoration: underline dashed;
      font-size: 17px;
  }
`

const Comment = styled(Textarea)`
  height: 250px;
`

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.formRef = React.createRef();
        this.state = {
            email: props.email
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {email} = this.state;
        this.props.changeEmail(email);
        this.formRef.current.submit()
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState(ps => ({
            ...ps,
            email: value,
        }));
    }

    render() {
        const {className} = this.props;
        const {email} = this.state;

        return <form {...{className}} action="/form-submit" name="contact" method="POST" data-netlify="true"
              ref={this.formRef}>
            <input type="hidden" name="form-name" value="contact" />
            <Input name="name" placeholder={'Name'}/>
            <Input mt={6} value={email} onChange={this.handleChange} type={'text'} name="email"
                   placeholder={'Your email*'}/>
            <Comment name="message" mt={6} placeholder={'Comment'}/>

            <Button disabled={!validateEmail(email)} onClick={this.formSubmit} mt={6}>Submit</Button>
        </form>
    }
}

const StyledContactForm = styled(ContactForm)`
  ${space};
`

export default withLayout({noForm: true})(withRouteData(({page}) => (
    <Fragment>
        <Container mt={7}>
            <Flex width={[1, 1, 1/2]} m={[0, 3, 0]} flexDirection={'column'}>
                <H1WithBackground>{page.data.title}</H1WithBackground>
                <Subtitle>
                    {page.data.subtitle}
                </Subtitle>

                <Flex mt={[0, 7]} flexDirection={['column', 'row']}>
                    <Box width={[1, 1/2]}>
                        <IconLink href={`mailto: ${page.data.email}`} image={Envelop}>
                            {page.data.email}
                        </IconLink>
                    </Box>
                    <Box width={[1, 1/2]}>
                        <IconLink href={`tel: ${page.data.phone}`} image={Phone}>
                            {page.data.phone}
                        </IconLink>
                    </Box>
                </Flex>
            </Flex>
            <Box width={[1, 1, 1/2]} m={[0, 3, 0]}>
                <EmailContext.Consumer>
                    {context =>
                        <StyledContactForm {...context} mt={6}/>
                    }
                </EmailContext.Consumer>
            </Box>
        </Container>
    </Fragment>
)))


