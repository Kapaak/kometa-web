import styled, { css } from 'styled-components';

import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const KidsCoursesSection = styled.section`
  padding: 0 2rem;
  margin-bottom: 4rem;
`;

export const KidsCoursesContainer = styled(VerticalStack)`
  gap: 2.4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 6rem;
    }
  `}
`;
