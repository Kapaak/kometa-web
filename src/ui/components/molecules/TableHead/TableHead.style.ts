import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import { SortDirection } from '@tanstack/react-table';
import styled from 'styled-components';

import { TableRow } from '../../atoms';

export const TableHead = styled.thead`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.main};
`;

export const TableHeadRow = styled(TableRow)``;

export const TableHeadButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    prop !== 'sortable' &&
    prop !== 'textAlign' &&
    prop !== 'justifyContent' &&
    prop !== 'cursor',
})<{
  sortable?: boolean;
  textAlign?: string;
  justifyContent?: string;
  cursor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  text-align: ${({ textAlign }) => textAlign};
  cursor: ${({ cursor }) => cursor};
  width: 100%;
  &:hover > {
    text-decoration: ${({ sortable }) => (sortable ? 'underline' : 'none')};
  }
`;

export const TableHeadButtonArrow = styled(CaretDown).withConfig({
  shouldForwardProp: (prop) => prop !== 'sortDirection',
})<{
  sortDirection?: SortDirection | false;
}>`
  transform: ${({ sortDirection }) =>
    sortDirection === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)'};
  transform-origin: center;
  transition: transform 0.2s ease;
`;
