import styled from 'styled-components';
import { Drawer } from 'vaul';

export const DrawerContent = styled(Drawer.Content)`
  background-color: ${({ theme }) => theme.colors.grey['100']};
  border-radius: 1rem 1rem 0 0;
  margin-top: 2.4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 100;
`;

export const DrawerContentInner = styled.div`
  padding: 1.6rem;
  background-color: inherit;
  border-radius: inherit;
  flex: 1;
`;

export const DrawerOverlay = styled(Drawer.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 99;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.grey['500']};
  opacity: 0.6 !important;

  [vaul-drawer-visible='false'] {
    display: none;
  }
`;

export const DrawerTip = styled.div`
  margin-inline: auto;
  width: 3rem;
  height: 0.375rem;
  flex-shrink: 0;
  border-radius: 100rem;
  background-color: ${({ theme }) => theme.colors.grey['500']};
  margin-bottom: 2rem; /* 8 * 0.25rem */
`;

export const DrawerTitle = styled(Drawer.Title)`
  margin-bottom: 1.6rem;
  font-size: 1.8rem;
  font-weight: 500;
`;
