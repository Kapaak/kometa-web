import NextImage from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';

import { MaxWidth, Text } from '~/ui/components/atoms';

import { HamburgerMenu } from './parts';

import * as S from './Navigation.style';

import { navigationData } from './Navigation.data';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Navigation>
      <MaxWidth>
        <S.NavigationMenuList>
          <S.Logo as="li">
            <S.NavigationMenuItem as="div">
              <NextLink href="/">
                <NextImage
                  width={97}
                  height={36}
                  alt="Logo organizance Kometa"
                  src="/icons/kometa-logo-black.svg"
                />
              </NextLink>
            </S.NavigationMenuItem>
          </S.Logo>
          {navigationData.map((item) => (
            <S.NavigationMenuItem
              key={item.label}
              hiddenOnSmallDevice
              highlighted={item?.highlighted}
            >
              <NextLink href={item.href}>
                <Text variant="body2">{item.label}</Text>
              </NextLink>
            </S.NavigationMenuItem>
          ))}
          <HamburgerMenu
            onToggle={() => setIsOpen((prev) => !prev)}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            menuItems={navigationData}
          />
        </S.NavigationMenuList>
      </MaxWidth>
    </S.Navigation>
  );
}
