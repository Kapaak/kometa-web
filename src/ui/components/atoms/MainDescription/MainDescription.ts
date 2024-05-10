import { styled } from 'styled-components'

import { minBreakpoint } from '~/utils/dimensions'

import { Text } from '../Text'

export const MainDescription = styled(Text).attrs({
  variant: 'body2',
})(({ theme: { typography, breakpoints } }) => ({
  ...{ ...typography.body2 },
  [`@media ${minBreakpoint(breakpoints.lg)}`]: {
    ...{ ...typography.body1 },
  },
}))
