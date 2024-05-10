import styled, { css } from 'styled-components'

import { Flex } from '~/ui/components/atoms'
import { minBreakpoint } from '~/utils/dimensions'

export const FooterMainContent = styled(Flex)`
  gap: 4rem;
  grid-area: main-content;
  flex-direction: column;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.sm)}) {
      flex-direction: row;
    }
  `}
`
