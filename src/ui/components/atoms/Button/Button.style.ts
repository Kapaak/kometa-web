import { css, styled } from 'styled-components';

import { mapColorVariantToColor } from '~/utils/colors';

import { ButtonProps } from './Button.type';

const ButtonInitial = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['color', 'size', 'variant', 'customColor', 'fullWidth'].includes(prop),
})<ButtonProps>(({ theme: { typography }, size }) => ({
  ...(size === 'small' ? { ...typography.body6 } : { ...typography.body3 }),
}));

export const Button = styled(ButtonInitial)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: none;
  border-radius: 3rem;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  font-weight: 500;
  white-space: nowrap;
  font-size: 1.4rem;
  letter-spacing: 0.04rem;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:hover {
    transition: all 0.2s ease-in-out;
  }

  ${({ size = 'regular' }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.5rem 1.2rem;
          min-width: 15rem;
        `;
      case 'regular':
        return css`
          height: 5.1rem;
          min-width: 14rem;
          padding: 1.5rem 3rem;
        `;
    }
  }}

  ${({ color = 'primary', theme: { colors } }) => {
    switch (color) {
      case 'primary':
        return css`
          background-color: ${colors.primary.main};
          &:hover {
            background-color: ${colors.primary.dark};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${colors.secondary.main};
          &:hover {
            background-color: ${colors.secondary.dark};
          }
        `;
      case 'tetriary':
        return css`
          background-color: ${colors.tetriary.main};
          &:hover {
            background-color: ${colors.tetriary.dark};
          }
        `;
      case 'success':
        return css`
          background-color: ${colors.success.main};
          &:hover {
            background-color: ${colors.success.main};
          }
        `;
      case 'error':
        return css`
          background-color: ${colors.error.main};
          &:hover {
            background-color: ${colors.error.main};
          }
        `;
      case 'grey':
        return css`
          color: ${colors.grey[900]};
          background-color: ${colors.grey[200]};
          &:hover {
            background-color: ${colors.grey[200]};
          }
        `;
    }
  }}


${({
    disabled,
    variant = 'filled',
    color = 'primary',
    theme: { colors },
    customColor, // customColor is a prop that can be passed to the component
  }) => {
    const selectedColorVariant = mapColorVariantToColor.call(
      null,
      colors,
      disabled ? 'grey' : color
    );

    switch (variant) {
      case 'plain':
        return css`
          border-radius: 0;
          min-height: 0;
          min-width: 0;
          padding: 0;
          background-color: initial;
          text-transform: none;
          color: ${customColor ?? selectedColorVariant.main};

          &:hover {
            background-color: initial;
          }
        `;
      case 'filled':
        return css`
          color: ${customColor
            ? customColor
            : color === 'grey'
              ? colors.grey[900]
              : colors.grey[100]};
        `;

      case 'outlined':
        return css`
          border: 1px solid ${customColor ?? selectedColorVariant.main};
          color: ${customColor ?? selectedColorVariant.main};
          background-color: initial;
          &:hover {
            background-color: ${disabled
              ? 'initial'
              : selectedColorVariant.main};
            color: ${colors.grey[100]};
          }
        `;
    }
  }}
`;

export const ChildrenContainer = styled.span.withConfig({
  shouldForwardProp: (prop) => !['loading'].includes(prop),
})<{ loading: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
`;

export const FadeLoaderWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size: ButtonProps['size'] }>`
  position: absolute;
  transform: ${({ size }) => (size === 'small' ? 'scale(.4)' : 'scale(.5)')};
`;
