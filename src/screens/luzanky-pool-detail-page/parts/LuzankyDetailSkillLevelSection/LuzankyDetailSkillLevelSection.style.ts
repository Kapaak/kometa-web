import styled, { css } from 'styled-components';
import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 2rem 2rem 4rem;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 2rem 2rem 6rem;
    }
  `}
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
      gap: 4rem;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 5rem;
    }
  `}
`;

export const SectionDescriptionContainer = styled(VerticalStack)`
  gap: 2rem;
  flex: 1 1 50%;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 4rem;
    }
  `}
`;
