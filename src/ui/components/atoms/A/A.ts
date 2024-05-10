import styled from 'styled-components'

import { Text } from '../Text'

export const A = styled(Text).attrs({ as: 'a' })`
  &:hover {
    text-decoration: underline;
  }
`
