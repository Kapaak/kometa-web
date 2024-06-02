import { PropsWithChildren } from 'react';

import * as S from './Scrollable.style';

interface ScrollableProps extends PropsWithChildren {
  maxHeight?: string;
  className?: string;
}

export function Scrollable({
  maxHeight,
  className,
  children,
}: ScrollableProps) {
  return (
    <S.ScrollAreaRoot type="auto">
      <S.ScrollAreaViewport maxHeight={maxHeight} className={className}>
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
