import styled from 'styled-components';

import { Button } from '../Button';

export const IconButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['icon', 'transparent'].includes(prop),
})<{ transparent?: boolean }>`
  svg {
    transform: translateX(0);
    transition: transform 0.2s;
  }

  &:hover {
    background-color: ${({ transparent = false }) =>
      transparent ? 'transparent !important' : 'auto'};

    svg {
      transform: translateX(0.4rem);
      transition: transform 0.2s;
    }
  }
`;
