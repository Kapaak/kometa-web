import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

export const TimeSlotPrice = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  width: fit-content;
  padding: 0.4rem 1.4rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.grey['100']};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding: 0.9rem 1.8rem;
    }
  `}
`;
