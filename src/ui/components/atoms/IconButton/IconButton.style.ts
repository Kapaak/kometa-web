import styled from 'styled-components';

import { Button } from '../Button';

export const IconButton = styled(Button)`
  svg {
    transform: translateX(0);
    transition: transform 0.2s;
  }

  &:hover {
    background-color: initial;

    svg {
      transform: translateX(0.4rem);
      transition: transform 0.2s;
    }
  }
`;
