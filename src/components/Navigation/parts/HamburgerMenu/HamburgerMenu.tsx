import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Hamburger } from '~/ui/components/atoms';

import * as S from './HamburgerMenu.style';

interface HamburgerMenuProps {
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
  menuItems: {
    label: string;
    href: string;
  }[];
}

export function HamburgerMenu({
  open,
  onClose,
  onToggle,
  menuItems,
}: HamburgerMenuProps) {
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  //not all styles are overriden using styled-components
  const styles = {
    bmOverlay: {
      top: '0',
      left: '0',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
      zIndex: '1000',
    },
  };

  useEffect(() => {
    //fix SSR issue
    setParentElement(document.querySelector('nav'));
  }, []);

  //disable scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <Hamburger isOpen={open} onChange={onToggle} />
      {parentElement &&
        createPortal(
          <S.HamburgerMenu
            isOpen={open}
            right
            onClose={onClose}
            customBurgerIcon={false}
            customCrossIcon={false}
            styles={styles}
          >
            {menuItems.map((item) => (
              <S.HamburgerMenuItem
                variant="body1"
                key={item.label}
                onClick={onClose}
              >
                <NextLink href={item.href}>{item.label}</NextLink>
              </S.HamburgerMenuItem>
            ))}
          </S.HamburgerMenu>,
          parentElement
        )}
    </>
  );
}
