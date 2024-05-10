import styled, { DefaultTheme } from 'styled-components';

export const MaxWidth = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant?: keyof DefaultTheme['maxWidth'] }>`
  height: inherit;
  width: inherit;
  max-width: ${({ theme, variant }) => theme.maxWidth[variant ?? 'main']};
  margin: 0 auto;
`;
