import { styled } from 'styled-components'

import { minBreakpoint } from '~/utils/dimensions'

import { Text } from '../Text'

export const H1 = styled(Text).attrs({
  as: 'h1',
})(({ theme: { breakpoints, typography } }) => ({
  ...{ ...typography.h2 },
  [`@media ${minBreakpoint(breakpoints.lg)}`]: {
    ...{ ...typography.h1 },
  },
}))
