import { css, styled } from 'styled-components'

type DividerProps = {
  color?: string
  width?: string
}

export const Divider = styled.hr.withConfig({
  shouldForwardProp: (prop) => !['color', 'width'].includes(prop),
})<DividerProps>(
  ({ color, width }) => css`
    border: 1px solid ${color};
    width: ${width ?? '100%'};
  `
)
