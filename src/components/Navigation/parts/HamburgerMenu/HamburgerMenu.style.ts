import { slide as Menu } from 'react-burger-menu';

import styled from 'styled-components';

import { Text } from '~/ui/components/atoms';

export const HamburgerMenu = styled(Menu)`
  .bm-menu {
    background: ${({ theme }) => theme.colors.primary.main};
    padding: 5.4rem;
    font-size: 1.15em;
    width: 100%;
  }
  .bm-item-list {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    color: ${({ theme }) => theme.colors.grey['100']};
    padding: 0.8em;
    text-align: right;
    height: auto !important;
    margin-top: 8rem;
  }
`;

export const HamburgerMenuItem = styled(Text)`
  font-size: 2rem;
  font-weight: 600;
`;
