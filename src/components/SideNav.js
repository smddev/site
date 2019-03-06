import React from 'react'
import styled from 'styled-components';
import {H2} from '../atoms'
import {IndustryList, ServiceList, TechList} from "./index";

const SideNav = ({className, industries, services, techs}) => <div {...{className}}>
    <H2>Industries</H2>
    <IndustryList vertical iconSize={2} mt={'24px'} industries={industries}/>
    <H2 mt={'60px'}>Services</H2>
    <ServiceList pxSize={18} mt={'24px'} services={services}/>
    <H2 mt={'60px'}>Technologies</H2>
    <TechList mt={5} {...{techs}}/>
</div>

export default styled(SideNav)`
  padding-left: 120px;
`;