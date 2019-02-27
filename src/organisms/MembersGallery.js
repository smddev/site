import React, {Fragment} from 'react'
import {Box, Flex} from "@rebass/grid";
import {MemberCard} from "../components";
import styled from "styled-components";
import {space} from "styled-system";

const Cell = styled(({children, className}) => <Box {...{className}} width={[1, 1 / 2, 1 / 2]}>
    {children}
</Box>)`
  &:nth-child(odd) {
    padding-right: 60px;
  }
  
  &:nth-child(even) {
    padding-left: 60px;
  }  
`

export default styled(({members, className}) => <Flex width={1} {...{className, flexWrap:'wrap'}}>
    {members.map( (m, i)=>
        <Cell key={i}>
            <MemberCard item={m}/>
        </Cell>
    )}
</Flex>)`
  ${space}
`