import { PropsWithChildren } from 'react'

import * as S from './FooterMainContentItemWrapper.style'

interface FooterMainContentItemWrapperProps extends PropsWithChildren {
  title: string
}

export function FooterMainContentItemWrapper({
  title,
  children,
}: FooterMainContentItemWrapperProps) {
  return (
    <S.FooterMainContentItemWrapper>
      <S.Label>{title}</S.Label>

      {children}
    </S.FooterMainContentItemWrapper>
  )
}
