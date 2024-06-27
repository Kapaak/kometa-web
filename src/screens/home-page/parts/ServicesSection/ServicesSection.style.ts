import styled, { css } from 'styled-components';

import { Headline } from '~/ui/components/atoms';
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

export const ServiceSectionHeadline = styled(Headline)`
  margin-bottom: 2.4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      text-align: center;
    }

    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      margin-bottom: 6rem;
    }
  `}
`;

export const ServicesSection = styled.section`
  padding: 0 2rem;
  scroll-margin-top: 11rem;
`;
