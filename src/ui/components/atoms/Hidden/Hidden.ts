import { DefaultTheme, styled } from 'styled-components'

import { maxBreakpoint, minBreakpoint } from '~/utils/dimensions'

type HiddenProps = {
  down?: keyof DefaultTheme['breakpoints']
  up?: keyof DefaultTheme['breakpoints']
  isHidden?: boolean
}

export const Hidden = styled.div.withConfig({
  shouldForwardProp: (prop) => !['down', 'up', 'isHidden'].includes(prop),
})<HiddenProps>`
  display: block;
  ${({ isHidden }) => {
    if (isHidden) {
      return 'visibility: hidden;'
    }
    return 'visibility: visible;'
  }}

  ${({ up, theme: { breakpoints } }) => {
    switch (up) {
      case 'sm':
        return `@media ${minBreakpoint(breakpoints.sm)} { display: none; }`
      case 'md':
        return `@media ${minBreakpoint(breakpoints.md)} { display: none; }`
      case 'lg':
        return `@media ${minBreakpoint(breakpoints.lg)} { display: none; }`
      case 'xl':
        return `@media ${minBreakpoint(breakpoints.xl)} { display: none; }`
      case 'xxl':
        return `@media ${minBreakpoint(breakpoints.xxl)} { display: none; }`
      default:
        return ''
    }
  }}

${({ down, theme: { breakpoints } }) => {
    switch (down) {
      case 'sm':
        return `@media ${maxBreakpoint(breakpoints.sm)} { display: none; }`
      case 'md':
        return `@media ${maxBreakpoint(breakpoints.md)} { display: none; }`
      case 'lg':
        return `@media ${maxBreakpoint(breakpoints.lg)} { display: none; }`
      case 'xl':
        return `@media ${maxBreakpoint(breakpoints.xl)} { display: none; }`
      case 'xxl':
        return `@media ${maxBreakpoint(breakpoints.xxl)} { display: none; }`
      default:
        return ''
    }
  }}
`
