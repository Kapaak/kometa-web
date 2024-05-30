import { ReactNode } from 'react';

import { Cell, RowModel, flexRender } from '@tanstack/react-table';

import { TableCell, TableRow } from '../../atoms';

import * as S from './TableBody.style';

export interface TableBodyProps<T> {
  rows?: RowModel<T>;
  showNoData?: boolean;
  noDataChildren?: ReactNode;
}

export function TableBody<T>({
  noDataChildren,
  rows,
  showNoData,
}: TableBodyProps<T>) {
  return (
    <tbody>
      {(rows?.rows ?? []).map((row, index) => (
        <S.TableBodyRow key={`${row.id}:${index}`}>
          {row.getVisibleCells().map((cell: Cell<T, unknown>) => {
            const meta = cell.column?.columnDef?.meta as
              | { align?: string }
              | undefined;
            const align = meta?.align ?? 'left';

            return (
              <TableCell key={cell.id} textAlign={align}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            );
          })}
        </S.TableBodyRow>
      ))}
      {showNoData && (rows?.rows?.length ?? 0) === 0 && (
        <TableRow>
          <TableCell variant="body" colSpan={10000}>
            {noDataChildren}
          </TableCell>
        </TableRow>
      )}
    </tbody>
  );
}
