import NextImage from 'next/image';

import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
    }
  `}
  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.xl)}) {
      gap: 7.6rem;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  margin-top: 1rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1 1 50%;
  border-radius: 1rem;
  height: 43rem;
`;

export const Image = styled(NextImage)`
  object-fit: cover;
  object-position: top;
  border-radius: inherit;
`;
