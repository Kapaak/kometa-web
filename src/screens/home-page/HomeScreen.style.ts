import styled, { css } from 'styled-components';

import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const HomeScreenMain = styled(VerticalStack).attrs({ as: 'main' })`
  gap: 2.4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 6rem;
    }
  `}
`;
