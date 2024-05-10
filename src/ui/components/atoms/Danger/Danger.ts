import { styled } from 'styled-components'

import { minBreakpoint } from '~/utils/dimensions'

export const Danger = styled.div(
  ({ theme: { typography, colors, breakpoints } }) => ({
    color: colors.error.main,
    ...{ ...typography.body4 },
    [`@media ${minBreakpoint(breakpoints.lg)}`]: {
      ...{ ...typography.body1 },
    },
  })
)
