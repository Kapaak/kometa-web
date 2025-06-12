import { PropsWithChildren } from 'react';
import * as S from './Header.style';

export function Header({ children }: PropsWithChildren) {
  return <S.Header>{children}</S.Header>;
}
