import React from 'react'
import styled from 'styled-components';
import {space} from 'styled-system';
import {H2} from '../atoms'
import {IndustryList, ServiceList, TechList} from "../components";

const SideNav = ({className, industries, services, techs}) => <div {...{className}}>
    <H2>Отрасли</H2>
    <IndustryList vertical iconSize={2} mt={'24px'} industries={industries}/>
    <H2 mt={'60px'}>Сервисы</H2>
    <ServiceList pxSize={18} mt={'24px'} services={services}/>
    <H2 mt={'60px'}>Технологии</H2>
    <TechList mt={5} {...{techs}}/>
</div>

export default styled(SideNav)`
  ${space};
`;