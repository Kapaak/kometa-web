import styled, { css } from 'styled-components';
import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  scroll-margin: 6rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 5rem 2rem;
    }
  `}
`;

export const SectionNotSwimmingList = styled(VerticalStack).attrs({
  as: 'ul',
})`
  list-style-position: inside;
  font-weight: 300;
  gap: 1rem;
`;

export const SectionDescriptionContainer = styled(VerticalStack)`
  gap: 0.5rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 1rem;
    }
  `}
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 4rem;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 5rem;
    }
  `}
`;
