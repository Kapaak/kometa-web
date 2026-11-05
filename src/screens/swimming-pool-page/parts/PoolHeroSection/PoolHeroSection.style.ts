import Image from 'next/image';

import styled, { css } from 'styled-components';

import { Flex, Section, Text, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const HeroSection = styled(Section)``;

export const HeroSectionBanner = styled(Flex)`
  padding: 2rem;
  border-radius: 2rem;

  a {
    max-width: max-content;
  }

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding: 2.4rem 2.7rem;
    }
  `}
`;

export const HeroSectionBannerDescription = styled(VerticalStack)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 2rem;
  gap: 2.4rem;
  color: ${({ theme }) => theme.colors.grey[100]};
  align-self: flex-end;
  padding: 2.4rem 3rem;

  & > button {
    align-self: flex-start;
  }

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      width: 46rem;
      padding: 6rem 4.8rem;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      align-self: stretch;
      justify-content: center;
    }
  `}
`;

export const HeroSectionBannerImage = styled(Image)`
  border-radius: inherit;
  object-fit: cover;
`;

export const HeroSectionBannerDescriptionTitle = styled(Text).attrs({
  as: 'h1',
  variant: 'h1',
})`
  color: ${({ theme }) => theme.colors.secondary.main};
  text-transform: uppercase;
`;

export const HeroSectionBannerDescriptionSubtitle = styled(Text).attrs({
  as: 'h2',
  variant: 'h6',
})`
  color: ${({ theme }) => theme.colors.secondary.main};
`;
