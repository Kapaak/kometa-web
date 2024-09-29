import styled, { css } from 'styled-components';

import { Scrollable as SScrollable } from '~/ui/components/atoms';
import { maxBreakpoint } from '~/utils/dimensions';

export const BlogSection = styled.section`
  min-height: 50vh;
  padding: 0 2rem;
  margin-bottom: 4rem;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey['800']};
  border-radius: 3rem;
  width: 9rem;
  padding: 0.5rem 1rem;
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey['400']};
  }
`;

export const Scrollable = styled(SScrollable)`
  max-width: calc(100vw - 6rem);

  ${({ theme }) => css`
    @media (${maxBreakpoint(theme.breakpoints.md)}) {
      & {
        height: 5rem;
      }
    }
  `}
`;

export const EmptyFilterResults = styled.div`
  display: grid;
  place-items: center;
  min-height: 20rem;
`;
