import styled from 'styled-components'

import { Text, VerticalStack } from '~/ui/components/atoms'

export const Label = styled(Text).attrs({ as: 'h3' })`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 600;
`

export const FooterMainContentItemWrapper = styled(VerticalStack)`
  min-width: min-content;
`
