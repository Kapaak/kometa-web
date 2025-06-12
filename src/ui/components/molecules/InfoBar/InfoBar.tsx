import { X } from '@phosphor-icons/react';
import { MaxWidth } from '../../atoms/MaxWidth';
import { Text } from '../../atoms/Text';

import * as S from './InfoBar.style';

interface InfoBarProps {
  value?: string;
  visible?: boolean;
  onClose?: () => void;
}

export function InfoBar({ visible, value, onClose }: InfoBarProps) {
  if (!visible || !value || value?.length === 0) {
    return null;
  }

  return (
    <S.InfoBar>
      <MaxWidth>
        <S.Container>
          <Text variant="body4">{value}</Text>
        </S.Container>
      </MaxWidth>

      <S.CloseButton onClick={onClose}>
        <X />
      </S.CloseButton>
    </S.InfoBar>
  );
}
