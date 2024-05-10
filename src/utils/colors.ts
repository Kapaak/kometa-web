import { DefaultTheme } from 'styled-components';

/**
 * Maps a color variant to a color object from the theme's color palette.
 *
 * @param colors - The color palette of the theme.
 * @param variant - The key of the color in the color palette.
 *
 * @returns If the variant is 'grey', returns an object with 'light', 'main', and 'dark' properties, each representing a different shade of grey. Otherwise, returns the color object associated with the variant key from the color palette.
 */
export function mapColorVariantToColor(
  colors: DefaultTheme['colors'],
  variant: keyof DefaultTheme['colors']
) {
  if (variant === 'grey') {
    return {
      light: colors.grey[100],
      main: colors.grey[700],
      dark: colors.grey[200],
    };
  }

  return colors[variant];
}
