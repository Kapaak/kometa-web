import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const FirstLectureContainer = styled(VerticalStack)`
  padding: 3.6rem;
  gap: 4.2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.xl)}) {
      border-radius: 1rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  display: none;
  position: relative;
  flex: 1 1 50%;
  border-radius: 0.5rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.xl)}) {
      display: block;
    }
  `}
`;

export const Image = styled(NextImage)`
  object-fit: cover;
  flex: 1 1 50%;
  border-radius: inherit;
`;

export const DescriptionContainer = styled(VerticalStack)`
  gap: 2.4rem;
`;

export const SectionWrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 4.8rem;
    }
  `}
`;
