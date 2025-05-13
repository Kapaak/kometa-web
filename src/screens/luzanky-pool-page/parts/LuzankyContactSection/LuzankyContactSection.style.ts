import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 5rem 2rem 10rem;
    }
  `}
`;

export const SectionRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
      gap: 4rem;
    }
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  flex: 1 1 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 2.4rem;
    }
  `}
`;

export const BorderedRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey['600']};
  padding: 1rem 0;

  svg {
    flex-shrink: 0;
  }

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 2.4rem;
    }
  `}
`;
