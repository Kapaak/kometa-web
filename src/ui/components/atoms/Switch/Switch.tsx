import { type SwitchProps } from '@radix-ui/react-switch';

import * as S from './Switch.style';

export function Switch(props: SwitchProps) {
  return (
    <S.Switch {...props}>
      <S.SwitchThumb />
    </S.Switch>
  );
}
