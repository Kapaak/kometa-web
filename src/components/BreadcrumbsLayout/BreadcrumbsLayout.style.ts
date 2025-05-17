import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

export const BreadcrumbsLayout = styled.div`
  padding: 2rem 2rem 0;
  max-width: 100vw;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding: 4rem 2rem 2rem;
    }
  `}
`;
