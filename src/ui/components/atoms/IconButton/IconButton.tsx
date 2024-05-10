import { PropsWithChildren, ReactNode } from 'react'

import { ButtonProps } from '../Button/Button.type'

import * as S from './IconButton.style'

interface IconButtonProps extends ButtonProps {
  icon: ReactNode
}

export function IconButton({
  children,
  loading,
  size = 'regular',
  icon,
  ...rest
}: PropsWithChildren<IconButtonProps>) {
  return (
    <S.IconButton size={size} {...rest}>
      {!loading && children}
      {!loading && icon}
    </S.IconButton>
  )
}
