import NextImage from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';

import { Hamburger, MaxWidth, Text } from '~/ui/components/atoms';

import { HamburgerMenu } from './parts';

import * as S from './Navigation.style';

import { navigationData } from './Navigation.data';

interface NavigationProps {}

export function Navigation({}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Navigation>
      <HamburgerMenu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        menuItems={navigationData}
      />
      <MaxWidth>
        <S.NavigationMenuList>
          <S.Logo>
            <S.NavigationMenuItem>
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
            <S.NavigationMenuItem key={item.label} hiddenOnSmallDevice>
              <NextLink href={item.href}>
                <Text variant="body2">{item.label}</Text>
              </NextLink>
            </S.NavigationMenuItem>
          ))}
          <Hamburger
            isOpen={isOpen}
            onChange={() => setIsOpen((prev) => !prev)}
          />
        </S.NavigationMenuList>
      </MaxWidth>
    </S.Navigation>
  );
}
