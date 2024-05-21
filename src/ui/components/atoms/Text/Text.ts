import styled, { DefaultTheme, css } from 'styled-components';

export type TextProps = {
  align?: 'left' | 'center' | 'right';
  color?: string;
  variant?: keyof DefaultTheme['typography'];
  transform?: 'capitalize' | 'uppercase' | 'lowercase';
};

const TextInitial = styled.p<TextProps>(
  ({ theme: { typography }, variant }) => ({
    ...(variant && typography[variant]),
  })
);

export const Text = styled(TextInitial).withConfig({
  shouldForwardProp: (prop) =>
    !['variant', 'transform', 'color'].includes(prop),
})`
  ${({ color, align, transform }) => css`
    color: ${color};
    text-align: ${align};
    text-transform: ${transform};
  `}
`;
