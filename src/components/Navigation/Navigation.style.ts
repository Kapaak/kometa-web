import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled, { css } from 'styled-components';

import { maxBreakpoint, minBreakpoint } from '~/utils/dimensions';

export const Navigation = styled(NavigationMenu.Root)`
  width: 100%;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey['400']};
  z-index: 11;

  & > div {
    width: inherit;
  }
`;

export const Logo = styled.div`
  margin-right: auto;
`;

export const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 1.4rem 0;
  list-style: none;
  margin: 0;
  width: 100%;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding: 2.4rem 0;
    }
  `}
`;

export const NavigationMenuItem = styled(NavigationMenu.Item).withConfig({
  shouldForwardProp: (prop) =>
    !['hiddenOnSmallDevice', 'highlighted'].includes(prop),
})<{
  hiddenOnSmallDevice?: boolean;
  highlighted?: boolean;
}>`
  p {
    font-weight: 500;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, hiddenOnSmallDevice, highlighted }) =>
    hiddenOnSmallDevice &&
    css`
      ${highlighted &&
      css`
        padding: 0.4rem 1rem;
        background-color: ${theme.colors.grey['200']};
        border-radius: 0.5rem;
        border: 1px solid ${theme.colors.grey['500']};
      `}

      @media (${maxBreakpoint(theme.breakpoints.lg)}) {
        display: none;
      }
    `}
`;
