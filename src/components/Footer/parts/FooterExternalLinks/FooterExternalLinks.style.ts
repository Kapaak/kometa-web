import styled, { css } from 'styled-components'

import { Flex, Text } from '~/ui/components/atoms'
import { minBreakpoint } from '~/utils/dimensions'

export const Creator = styled(Text)`
  color: ${({ theme }) => theme.colors.grey[100]};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      text-align: right;
    }
  `}
`

export const ImageFlexContainer = styled(Flex)`
  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      justify-content: flex-end;
    }
  `}
`
export const FooterExternalLinks = styled(Flex)`
  gap: 1rem;
  flex-direction: column;
  grid-area: external-links;
`
