import NextLink from 'next/link';
import {
  Breadcrumb as ReactAriaBreadcrumb,
  Breadcrumbs as ReactAriaBreadcrumbs,
} from 'react-aria-components';

import styled, { css } from 'styled-components';

import { maxBreakpoint } from '~/utils/dimensions';

export const BreadcrumbLink = styled(NextLink)`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }

  &[data-current] {
    color: ${({ theme }) => theme.colors.grey['900']};
    font-weight: 500;
    pointer-events: none;
    cursor: auto;
  }
`;

export const Breadcrumb = styled(ReactAriaBreadcrumb)`
  color: ${({ theme }) => theme.colors.grey['600']};
  outline: none;
  position: relative;
  text-decoration: none;

  ${({ theme }) => css`
    @media (${maxBreakpoint(theme.breakpoints.md)}) {
      max-width: 20rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`;

export const Breadcrumbs = styled(ReactAriaBreadcrumbs)`
  display: flex;
  align-items: center;
  list-style: none;

  ${Breadcrumb}:not(:last-child)::after {
    content: '/';
    alt: ' ';
    font-size: 1.2rem;
    padding: 0 1.2rem;
  }

  ${({ theme }) => css`
    @media (${maxBreakpoint(theme.breakpoints.md)}) {
      ${Breadcrumb}:not(:last-child)::after {
        padding: 0 0.8rem;
      }
    }
  `}
`;
