import { PropsWithChildren } from 'react';

import * as S from './Scrollable.style';

interface ScrollableProps extends PropsWithChildren {
  maxHeight?: string;
}

export function Scrollable({ maxHeight, children }: ScrollableProps) {
  return (
    <S.ScrollAreaRoot type="auto">
      <S.ScrollAreaViewport maxHeight={maxHeight}>
        {children}
      </S.ScrollAreaViewport>
      <S.ScrollAreaScrollbar orientation="vertical">
        <S.ScrollAreaThumb />
      </S.ScrollAreaScrollbar>
      <S.ScrollAreaScrollbar orientation="horizontal">
        <S.ScrollAreaThumb />
      </S.ScrollAreaScrollbar>
      <S.ScrollAreaCorner />
    </S.ScrollAreaRoot>
  );
}
