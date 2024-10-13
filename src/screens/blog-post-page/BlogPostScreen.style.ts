import NextLink from 'next/link';

import styled, { css } from 'styled-components';

import { MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const BlogPostSection = styled.section`
  padding: 0 2rem;
  margin-bottom: 4rem;
`;

export const BlogPostMaxWidth = styled(MaxWidth)`
  max-width: 100rem;
`;

export const BlogPostContainer = styled(VerticalStack).attrs({
  as: 'article',
})`
  margin-bottom: 4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      margin-bottom: 10rem;
    }
  `}
`;

export const BlogPostMeta = styled(VerticalStack)`
  gap: 0.5rem;
  margin-block: 1rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 1rem;
      margin-block: 2rem;
    }
  `}
`;

export const Title = styled(Text).attrs({
  as: 'h1',
})`
  color: var(--col2);
  font-family: var(--font1);
  font-size: 4rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
`;

export const BlogItemImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'aspectRatio',
})<{ aspectRatio?: number }>`
  position: relative;
  width: 100%;
  max-height: 40rem;
  aspect-ratio: ${(props) => props.aspectRatio};
`;

export const PreviousPageLink = styled(NextLink)`
  margin-top: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      margin-top: 10rem;
    }
  `}
`;
