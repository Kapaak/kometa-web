import { css, styled } from 'styled-components';

import { ButtonProps } from './Button.type';

const ButtonInitial = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['color', 'size', 'variant', 'customColor', 'fullWidth'].includes(prop),
})<ButtonProps>(({ theme: { typography }, size }) => ({
  ...(size === 'small' ? { ...typography.body6 } : { ...typography.body3 }),
}));

export const Button = styled(ButtonInitial)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

  ${({ variant = 'filled', color = 'primary', theme: { button } }) => {
    if (variant === 'plain') {
      return css`
        border-radius: 0;
        min-height: 0;
        min-width: 0;
        padding: 0;
        background-color: initial;
        text-transform: none;

        &:hover {
          background-color: initial;
        }
      `;
    } else {
      return css`
        border: 1px solid ${button[variant][color].border};
        color: ${button[variant][color].text};
        background-color: ${button[variant][color].background};
        &:hover {
          background-color: ${button[variant][color].hover?.background};
          border-color: ${button[variant][color].hover?.border};
          color: ${button[variant][color].hover?.text};
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
