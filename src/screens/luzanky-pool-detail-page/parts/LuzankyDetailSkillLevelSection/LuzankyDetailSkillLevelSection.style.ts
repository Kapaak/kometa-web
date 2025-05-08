import styled, { css } from 'styled-components';
import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      flex-direction: row;
    }
  `}
`;

export const SectionDescriptionContainer = styled(VerticalStack)`
  gap: 2rem;
  flex: 1 1 50%;
  justify-content: space-between;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 4rem;
    }
  `}
`;
