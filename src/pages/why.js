import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import styled, {css} from 'styled-components';
import {withLayout} from "../organisms";
import {Container, description, H1WithBackground} from "../atoms";
import {Markdown} from "../components";

export default withLayout()(withRouteData(({page}) => (
  <Fragment>
    <Container mt={6}>
      <H1WithBackground mb={4}>{page.data.title}:</H1WithBackground>
      <Markdown source={page.content} className='markdown aboutPage' escapeHtml={false}/>
    </Container>
  </Fragment>
)))
