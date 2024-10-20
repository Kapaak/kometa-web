import { Icon as TIcon } from '@phosphor-icons/react';

import { Text } from '../../atoms';

import * as S from './IconText.style';

interface IconTextProps {
  icon: TIcon;
  text?: string | number;
}

export const IconText = ({ icon, text }: IconTextProps) => {
  const Icon = icon as TIcon;

  return (
    <S.IconText>
      <Icon size={20} />
      <Text>{text}</Text>
    </S.IconText>
  );
};
