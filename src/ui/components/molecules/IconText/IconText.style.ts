import styled from 'styled-components';

import { Flex } from '../../atoms';

export const IconText = styled(Flex)`
  flex-direction: row;
  gap: 1rem;
  height: initial;

  .icon {
    flex-shrink: 0;
    margin-top: 0.3rem;
  }
`;
