import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding: 2rem 2rem 4rem;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 2rem 2rem 6rem;
    }
  `}
`;

export const SectionImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1 1 50%;
  border-radius: 1rem;
  min-height: 30rem;
  display: none;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      display: block;
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

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 5rem;
    }
  `}
`;

export const Image = styled(NextImage)`
  object-fit: cover;
  flex: 1 1 50%;
  border-radius: inherit;
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
  `};
`;
