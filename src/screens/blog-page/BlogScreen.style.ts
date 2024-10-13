import styled, { css } from 'styled-components';

import { Scrollable as SScrollable } from '~/ui/components/atoms';
import { maxBreakpoint, minBreakpoint } from '~/utils/dimensions';

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

export const BlogPostsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      grid-template-columns: 1fr;
    }
  `}
`;
