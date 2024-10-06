import NextLink from 'next/link';

import styled, { css } from 'styled-components';

import {
  Button,
  NextSanityImage,
  Tag,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const BlogChip = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.grey['900']};
`;

export const BlogArticle = styled.article`
  display: grid;
  box-shadow: ${({ theme }) => theme.shadows.main};
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey['100']};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 5rem;
    }

    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      grid-template-columns: 2fr 1fr;
    }
  `}
`;

export const BlogArticleHeadline = styled(Text).attrs({
  variant: 'h4',
  as: 'h2',
})`
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.1rem;
  line-height: 2.6rem;
`;

export const BlogArticleButton = styled(Button)`
  color: ${({ theme }) => theme.colors.grey['900']};
  border-color: ${({ theme }) => theme.colors.grey['900']};
  align-self: flex-start;

  &:hover {
    color: ${({ theme }) => theme.colors.grey['100']};
    background-color: ${({ theme }) => theme.colors.grey['900']};
  }
`;

export const BlogArticleLink = styled(NextLink)`
  width: max-content;
`;

export const BlogArticleDescription = styled(Text).attrs({ variant: 'body2' })`
  display: none;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      display: block;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
      gap: 5rem;
      padding: 3.3rem 5.1rem;
    }

    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 3.3rem 0 3.3rem 5.1rem;
    }
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      align-items: flex-end;
    }

    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      align-items: center;
    }
  `}
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  height: 17.4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      display: none;
    }

    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      display: block;
      order: 3;
      height: auto;
    }
  `}
`;

export const CategoryContainer = styled(VerticalStack)`
  position: absolute;
  align-items: flex-end;
  width: initial;
  top: 2rem;
  right: 2rem;
  gap: 1rem;
  z-index: 10;
`;

export const BlogImage = styled(NextSanityImage)`
  object-position: center;
`;
