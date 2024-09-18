import styled, { css } from 'styled-components';

import { Scrollable as SScrollable } from '~/ui/components/atoms';
import { maxBreakpoint } from '~/utils/dimensions';

export const BlogSection = styled.section`
  min-height: 50vh;
  padding: 0 2rem;
  margin-bottom: 4rem;
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
