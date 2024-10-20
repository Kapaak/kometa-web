import styled, { css } from 'styled-components';

import { Text } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const AvailableCoursesFilter = styled.section`
  margin-block: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      margin-block: 4rem;
    }
  `}
`;

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

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey['800']};
  border-radius: 3rem;
  width: 14rem;
  padding: 0.5rem 1rem;
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey['400']};
  }
`;
