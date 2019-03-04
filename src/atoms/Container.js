import styled from "styled-components";
import {height, justifyContent, space, flexWrap} from "styled-system";
import {Flex} from "@rebass/grid/dist/index";

export const CONTAINER_WIDTH = '1232px';

export default styled(Flex)`
  max-width: ${CONTAINER_WIDTH};
  padding: 0 ${props => props.theme.space[3] + 'px'}; 
  margin: 0 auto;
  ${space};
  ${height};
  ${justifyContent};
  ${flexWrap}
`