import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem;
`;

export const SectionImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1 1 50%;
  border-radius: 1rem;
  min-height: 30rem;
`;

export const SectionDescriptionContainer = styled(VerticalStack)`
  gap: 2rem;
  flex: 1 1 50%;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
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
    }
  `};
`;
