import { PropsWithChildren } from 'react';

import { Flex, Text, VerticalStack } from '~/ui/components/atoms';
import { ControlledSwitch } from '~/ui/components/molecules';

import * as S from './CookieSettingsItem.style';

interface CookieSetingsItemProps {
  title: string;
  name: string;
}

export function CookieSetingsItem({
  title,
  name,
  children,
}: PropsWithChildren<CookieSetingsItemProps>) {
  return (
    <Flex direction="row">
      <VerticalStack>
        <Text variant="body3">{title}</Text>
        <S.Description variant="body2">{children}</S.Description>
      </VerticalStack>
      <ControlledSwitch name={name} />
    </Flex>
  );
}
