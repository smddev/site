import styled from "styled-components";
import {height, justifyContent} from "styled-system";
import {Flex} from "@rebass/grid/dist/index";

export default styled(Flex)`
  max-width: 1200px;
  padding: 0 ${props => props.theme.space[3] + 'px'}; 
  margin: 0 auto;
  ${height};
  ${justifyContent};
`