import { Icon } from '@phosphor-icons/react';
import { Flex, Text } from '~/ui/components/atoms';
import * as S from './BorderedLabelText.style';

interface BorderedLabelTextProps {
  label: string;
  description?: string;
  icon: Icon;
}

export function BorderedLabelText({
  icon,
  label,
  description,
}: BorderedLabelTextProps) {
  const Icon = icon;

  return (
    <S.BorderedLabelText>
      <Flex gap="1.6rem">
        <Icon size={22} weight="light" />
        <Text variant="body3">{label}</Text>
      </Flex>
      {description && <Text variant="body2">{description}</Text>}
    </S.BorderedLabelText>
  );
}
