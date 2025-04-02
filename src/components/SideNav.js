import React from 'react'
import styled from 'styled-components';
import {space} from 'styled-system';
import {H2} from '../atoms'
import {IndustryList, ServiceList, CategoryList} from "../components";
import { FormattedMessage } from 'react-intl'

const SideNav = ({className, industries, services, techs, expertises}) => <div {...{className}}>
    <H2>
        <FormattedMessage id='message.industries'/>
    </H2>
    <IndustryList vertical iconSize={2} mt={'24px'} industries={industries}/>

    <H2 mt={'60px'}>
        <FormattedMessage id='message.services'/>
    </H2>
    <ServiceList pxSize={18} mt={'24px'} services={services}/>
    
    <H2 mt={'60px'}>
        <FormattedMessage id='message.expertise'/>
    </H2>
    <CategoryList mt={5} categories={expertises} kind='expertises'/>
    
    <H2 mt={'60px'}>
        <FormattedMessage id='message.technologies'/>
    </H2>
    <CategoryList mt={5} categories={techs} />
</div>

export default styled(SideNav)`
  ${space};
`;
