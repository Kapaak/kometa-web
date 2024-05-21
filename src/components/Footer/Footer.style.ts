import styled, { css } from 'styled-components';

import { MaxWidth } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Footer = styled.footer`
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary.main};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      background-color: initial;
      padding: 2rem;
    }
  `}
`;

export const MaxWidthContainer = styled(MaxWidth)`
  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      background-color: ${theme.colors.primary.main};
      border-radius: 2rem;
      padding: 4rem;
    }
  `}
`;

export const FlexContainer = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-areas:
    'company-information company-information'
    'main-content  main-content'
    'external-links external-links';

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.sm)}) {
      grid-template-columns: 1fr minmax(min-content, 2fr);
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      grid-template-areas:
        'company-information main-content'
        'external-links external-links';
    }
  `}
`;
