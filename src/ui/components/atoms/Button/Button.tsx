import { PropsWithChildren } from 'react';

import { useTheme } from 'styled-components';

import { Loader } from '../Loader';

import * as S from './Button.style';

import { ButtonProps } from './Button.type';

export function Button({
  children,
  loading,
  size = 'regular',
  disabled,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const theme = useTheme();
  const { grey } = theme.colors;
  return (
    <S.Button size={size} disabled={disabled} {...rest}>
      {loading && (
        <S.FadeLoaderWrapper size={size}>
          <Loader loading={loading} color={grey['100']} />
        </S.FadeLoaderWrapper>
      )}

      <S.ChildrenContainer loading={Boolean(loading)}>
        {children}
      </S.ChildrenContainer>
    </S.Button>
  );
}
