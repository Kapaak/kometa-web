import { PropsWithChildren } from 'react';

import styled from 'styled-components';

interface TableCellProps extends PropsWithChildren {
  colSpan?: number;
  variant?: 'head' | 'body';
  width?: number;
  textAlign?: string;
}

export const TableCell = styled(
  ({ variant, width, textAlign, ...rest }: TableCellProps) =>
    variant === 'head' ? <th {...rest} /> : <td {...rest} />
).withConfig({
  shouldForwardProp: (prop) => !['variant', 'width'].includes(prop),
})<{ colSpan?: number }>`
  padding: 2.5rem 2.8rem;
  width: ${({ width = 0 }) => (width ? `${width / 10}rem` : 'unset')};
  font-weight: ${({ variant }) => (variant === 'head' ? '600' : '400')};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;
