import styled, { css } from 'styled-components';

import { Text } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const AvailableCoursesFilterTitle = styled(Text).attrs({
  variant: 'h3',
  as: 'h2',
})`
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const ControlledItems = styled.form`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  margin-bottom: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 2.4rem;
    }
  `}
`;
