import styled, { css } from 'styled-components';
import { Flex } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const ServiceSection = styled.section`
  scroll-margin-top: 10rem;
  padding: 1.5rem 2rem;
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
