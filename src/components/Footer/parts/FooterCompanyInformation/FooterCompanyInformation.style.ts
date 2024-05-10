import styled from 'styled-components'

import { Flex, Text } from '~/ui/components/atoms'

export const FooterCompanyInformation = styled(Flex)`
  flex-direction: column;
  gap: 3rem;
  grid-area: company-information;
`
export const Description = styled(Text)`
  font-size: 1.4rem;
  line-height: 2;
  color: ${({ theme }) => theme.colors.grey[100]};
`
