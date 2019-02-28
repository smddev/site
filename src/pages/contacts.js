import React, {Fragment, Component} from 'react'
import {withRouteData} from 'react-static'
import {Button, Container, H1, H1WithBackground, Link1, Subtitle, Input, Textarea} from "../atoms";
import {Footer} from "../organisms";
import {Box, Flex} from "@rebass/grid";
import Envelop from "../envelop.svg";
import Phone from "../phone.svg";
import styled from "styled-components";
import {space} from "styled-system";
import {validateEmail} from "../utils";

const IconLink = styled(Link1)`
  position: relative;
  display: inline-block;
  font-size: 20px;
  padding-top: 60px;
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
`

const Comment = styled(Textarea)`
  height: 250px;
`

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.formRef = React.createRef();
        this.state = {
            email: ""
        }
    }

    formSubmit = (e) => {
        console.log('submitted');
        this.formRef.current.submit()
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    render() {
        const {className} = this.props;
        const {email} = this.state;

        return <form {...{className}} name="contact" method="POST" data-netlify="true"
                 ref={this.formRef}>
            <Input name="name" placeholder={'Name'}/>
            <Input mt={6} value={email} onChange={this.handleChange} type={'email'} name="email" placeholder={'Your email*'}/>
            <Comment name="message" mt={6} placeholder={'Comment'}/>
            <Button disabled={!validateEmail(email)} onClick={this.formSubmit} mt={6} >Submit</Button>
        </form>
    }
}

const StyledContactForm = styled(ContactForm)`
  ${space};
`

export default withRouteData(({page}) => (
    <Fragment>
        <Container mt={7}>
            <Flex width={1/2} flexDirection={'column'}>
                <H1WithBackground>{page.data.title}</H1WithBackground>
                <Subtitle>
                    {page.data.subtitle}
                </Subtitle>

                <Flex mt={7}>
                    <Box width={1/2}>
                        <IconLink href={`mailto: ${page.data.email}`} image={Envelop}>
                            {page.data.email}
                        </IconLink>

                    </Box>
                    <Box width={1/2}>
                        <IconLink href={`tel: ${page.data.phone}`} image={Phone}>
                            {page.data.phone}
                        </IconLink>
                    </Box>
                </Flex>
            </Flex>
            <Box width={1/2}>
                <StyledContactForm mt={6}/>
            </Box>
        </Container>
        <Footer noForm mt={10} mb={6}/>
    </Fragment>
))


