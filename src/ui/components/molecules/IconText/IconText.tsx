import { Icon as TIcon } from '@phosphor-icons/react';

import { Text, TextProps } from '../../atoms';

import { ExecutionProps } from 'styled-components';
import * as S from './IconText.style';

interface IconTextProps extends ExecutionProps {
  icon: TIcon;
  text?: string | number;
  iconColor?: string;
  iconSize?: number;
  textVariant?: TextProps['variant'];
}

export const IconText = ({
  icon,
  text,
  iconColor = 'currentColor',
  iconSize = 20,
  textVariant = 'body2',
  ...props
}: IconTextProps) => {
  const Icon = icon as TIcon;

  return (
    <S.IconText {...props}>
      <Icon className="icon" color={iconColor} size={iconSize} />
      <Text variant={textVariant}>{text}</Text>
    </S.IconText>
  );
};
