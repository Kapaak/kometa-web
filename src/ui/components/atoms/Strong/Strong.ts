import styled from 'styled-components'

type StrongProps = {
  weight?: '100' | '200' | '300' | '400' | '500' | '600'
}

export const Strong = styled.strong<StrongProps>`
  font-weight: ${({ weight }) => weight ?? '600'};
`
