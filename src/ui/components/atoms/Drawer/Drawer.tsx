import { PropsWithChildren, ReactNode, useEffect } from 'react';

import { Drawer as VaulDrawer } from 'vaul';

import * as S from './Drawer.style';

export interface DrawerProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  action?: ReactNode;
  title?: string;
}

export function Drawer({
  open,
  title,
  onClose,
  action,
  children,
}: DrawerProps) {
  //fix for bug: https://github.com/emilkowalski/vaul/issues/152
  //scroll-behavior makes the scroll jump to the top of the page when the drawer is closed
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    return () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, []);

  return (
    <VaulDrawer.Root
      open={open}
      onClose={onClose}
      dismissible
      onOpenChange={(value) => !value && onClose()}
    >
      <VaulDrawer.Trigger asChild>{action}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <S.DrawerOverlay />
        <S.DrawerContent>
          <S.DrawerContentInner>
            <S.DrawerTip />
            <S.DrawerTitle>{title}</S.DrawerTitle>
            <VaulDrawer.Description />
            {children}
          </S.DrawerContentInner>
        </S.DrawerContent>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}
