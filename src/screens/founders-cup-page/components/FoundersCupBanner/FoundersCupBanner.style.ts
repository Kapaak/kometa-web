import Image from 'next/image';
import NextLink from 'next/link';

import styled, { css } from 'styled-components';

import { Card, Text, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const AvailableCoursesTitle = styled(Text).attrs({ variant: 'h1' })`
  position: relative;
  max-width: 60rem;
  color: ${({ theme }) => theme.colors.secondary.main};
  line-height: 1.1;
`;

export const AvailableCoursesBannerDescription = styled(Text).attrs({
  variant: 'body2',
})`
  position: relative;
  color: ${({ theme }) => theme.colors.grey['100']};
`;

export const AvailableCoursesBannerWrapper = styled(VerticalStack)`
  justify-content: space-between;
  padding: 3rem 4.5rem;
  gap: 2rem;

  & > button {
    align-self: flex-start;
  }
`;

export const AvailableCoursesBanner = styled(Card)`
  display: grid;
  min-height: 29.2rem;
  grid-template-columns: 1fr;
  position: relative;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary.main};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const Link = styled(NextLink)`
  align-self: start;
`;

export const AvailableCoursesBannerImage = styled(Image)`
  object-fit: cover;
  border-radius: inherit;
  object-position: 100% 20%;
`;

export const AvailableCoursesBannerImageWrapper = styled.div`
  display: none;
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1 1 40%;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      display: block;
    }
  `}
`;
