import styled, { css } from 'styled-components';
import { Flex, Section } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const ServiceSection = styled(Section)`
  scroll-margin-top: 10rem;
`;

export const Services = styled(Flex)`
  display: grid;
  gap: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.sm)}) {
      grid-template-columns: 1fr 1fr;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
      gap: 4rem;
    }
  `}
`;
