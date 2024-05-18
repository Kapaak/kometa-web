import styled, { css } from 'styled-components';

import { minBreakpoint } from '~/utils/dimensions';

export const ServicesSectionContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 2.4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
      gap: 4.8rem;
    }
  `}
`;

export const ServicesSection = styled.section`
  padding: 0 2rem;
`;
