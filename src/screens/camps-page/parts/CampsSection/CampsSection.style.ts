import styled, { css } from 'styled-components';

import { Text, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const CampsSection = styled.section`
  padding: 0 2rem;
`;

export const Title = styled(Text).attrs({ variant: 'h3', as: 'h1' })`
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const CampsContainerWrapper = styled(VerticalStack)`
  gap: 2rem;
  margin-block: 2.4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      margin-bottom: 4rem;
    }
  `}
`;

export const CampsContainer = styled.div`
  display: grid;
  gap: 2.4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
      gap: 4.8rem;
    }
  `}
`;
