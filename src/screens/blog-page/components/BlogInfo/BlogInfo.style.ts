import styled, { css } from 'styled-components';

import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const BlogInfo = styled(VerticalStack)`
  gap: 0.5rem;
  margin-top: 1rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 1rem;
      margin-top: 0;
    }
  `}
`;
