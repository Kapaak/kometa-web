import { css, styled } from 'styled-components';

type justifyOptions =
  | 'space-between'
  | 'space-evenly'
  | 'center'
  | 'space-around'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'left'
  | 'right';

type alignOptions = 'center' | 'flex-end' | 'flex-start' | 'stretch';

type positionOptions = 'absolute' | 'relative' | 'fixed';

type directionOptions = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type textAlignOptions = 'left' | 'center' | 'right';

type wrapOptions = 'nowrap' | 'wrap' | 'wrap-reverse';

type VerticalStackProps = {
  justify?: justifyOptions;
  align?: alignOptions;
  direction?: directionOptions;
  gap?: string;
  textAlign?: textAlignOptions;
  width?: string;
  height?: string;
  position?: positionOptions;
  wrap?: wrapOptions;
  padding?: string;
  flex?: string;
  minWidth?: string;
  maxWidth?: string;
  order?: number;
};

export const VerticalStack = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'justify',
      'align',
      'direction',
      'gap',
      'textAlign',
      'width',
      'height',
      'position',
      'wrap',
      'padding',
      'flex',
      'minWidth',
      'order',
    ].includes(prop),
})<VerticalStackProps>`
  ${({
    position = 'relative',
    direction = 'column',
    justify = 'flex-start',
    align = 'stretch',
    gap = '0',
    textAlign = 'left',
    width = '100%',
    height = 'auto',
    wrap = 'nowrap',
    padding = '0',
    flex = '0 1 auto',
    minWidth = '0',
    maxWidth = '100%',
    order = 'initial',
  }) => {
    return css`
      display: flex;
      position: ${position};
      padding: ${padding};
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      gap: ${gap};
      height: ${height};
      width: ${width};
      text-align: ${textAlign};
      flex-wrap: ${wrap};
      flex: ${flex};
      min-width: ${minWidth};
      max-width: ${maxWidth};
      order: ${order};
    `;
  }}
`;
