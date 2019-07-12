import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import styled, {css} from 'styled-components';
import {withLayout} from "../organisms";

export default withLayout()(withRouteData(({why}) => (
  <Fragment>
    {console.log(why)}
  </Fragment>
)))
