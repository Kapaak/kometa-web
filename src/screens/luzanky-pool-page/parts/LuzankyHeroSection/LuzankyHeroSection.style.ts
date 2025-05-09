import Image from 'next/image';

import styled, { css } from 'styled-components';

import { Flex, Text, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const HeroSection = styled.section`
  padding: 2rem 2rem 0;
`;

export const HeroSectionBanner = styled(Flex)`
  padding: 1.2rem;
  min-height: 51rem;
  border-radius: 1rem;

  a {
    max-width: max-content;
  }
`;

export const HeroSectionBannerDescription = styled(VerticalStack)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 3rem 2.4rem;
  border-radius: 0.5rem;
  gap: 2rem;
  max-width: 36rem;
  color: ${({ theme }) => theme.colors.grey[100]};
  align-self: flex-end;

  & > button {
    align-self: flex-start;
  }

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
`;

export const HeroSectionBannerDescriptionSubtitle = styled(Text).attrs({
  as: 'h2',
  variant: 'h5',
})`
  color: ${({ theme }) => theme.colors.secondary.main};
`;
