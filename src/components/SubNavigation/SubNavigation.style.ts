import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import { Section } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const SubNavigation = styled(Section)`
  display: none;
  height: 7rem;
  min-height: 7rem;
  background-color: ${({ theme }) => theme.colors.grey['200']};
  padding-block: 0;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      display: block;
    }
  `}
`;

export const SubNavigationContainer = styled.div`
  display: grid;
  align-items: center;
  height: 100%;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.xl)}) {
      grid-template-columns: auto auto;
    }
  `}
`;

export const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 0;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding: 0;
    }
  `}
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.4rem;
  text-transform: uppercase;
  flex-shrink: 0;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;

export const MainLink = styled(NextLink)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.primary.main};
  width: fit-content;
`;

export const Link = styled(NextLink)``;

export const ButtonContainer = styled.div`
  display: none;
  margin-left: auto;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      display: block;
    }
  `}
`;
