import styled, { css, DefaultTheme } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

type Variant = 'normal' | 'tall';

function stylesByVariant(variant: Variant, theme: DefaultTheme) {
  if (variant === 'normal') {
    return css`
      padding: 2rem;

      @media (${minBreakpoint(theme.breakpoints.md)}) {
        padding: 2rem 4rem;
      }
    `;
  }

  if (variant === 'tall') {
    return css`
      padding: 4rem 2rem;

      @media (${minBreakpoint(theme.breakpoints.md)}) {
        padding: 5rem 4rem;
      }
    `;
  }

  return css`
    padding: 2rem;
  `;
}
export const Section = styled.section<{
  noBottomPadding?: boolean;
  variant?: Variant;
}>`
  ${({ theme, variant = 'normal' }) => stylesByVariant(variant, theme)}
`;
