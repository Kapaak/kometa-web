import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled, { css } from 'styled-components';

import { maxBreakpoint, minBreakpoint } from '~/utils/dimensions';

export const Navigation = styled(NavigationMenu.Root)`
  position: sticky;
  top: 0;
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
  shouldForwardProp: (prop) => !['hiddenOnSmallDevice'].includes(prop),
})<{
  hiddenOnSmallDevice?: boolean;
}>`
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, hiddenOnSmallDevice }) =>
    hiddenOnSmallDevice &&
    css`
      @media (${maxBreakpoint(theme.breakpoints.lg)}) {
        display: none;
      }
    `}
`;
