import { css, styled } from 'styled-components';

type DividerProps = {
  color?: string;
  width?: string;
};

export const Divider = styled.hr.withConfig({
  shouldForwardProp: (prop) => !['color', 'width'].includes(prop),
})<DividerProps>(
  ({ color, width }) => css`
    border: none;
    height: 0.1rem;
    color: ${color};
    background-color: ${color};
    width: ${width ?? '100%'};
  `
);
