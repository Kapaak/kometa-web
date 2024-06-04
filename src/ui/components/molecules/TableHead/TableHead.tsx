import { HeaderGroup, flexRender } from '@tanstack/react-table';

import { TableCell } from '../../atoms/TableCell';

import * as S from './TableHead.style';

export interface TableHeadProps<T> {
  rows?: HeaderGroup<T>[];
}

export function TableHead<T>({ rows }: TableHeadProps<T>) {
  return (
    <S.TableHead>
      {(rows ?? []).map((columns) => (
        <S.TableHeadRow key={columns.id}>
          {columns.headers.map((cell) => {
            const meta = cell.column?.columnDef?.meta as
              | { align?: string; cursor?: string }
              | undefined;

            return (
              <TableCell
                key={cell.id}
                {...{ onClick: cell.column?.getToggleSortingHandler() }}
                width={cell.getSize()}
                variant="head"
              >
                <S.TableHeadButton
                  textAlign={meta?.align ?? 'left'}
                  justifyContent={meta?.align ?? 'left'}
                  cursor={meta?.cursor ?? 'pointer'}
                  sortable={cell.column?.getCanSort()}
                >
                  {flexRender(cell.column.columnDef.header, cell.getContext())}
                  {cell.column?.getIsSorted() && (
                    <S.TableHeadButtonArrow
                      sortDirection={cell.column?.getIsSorted()}
                    />
                  )}
                </S.TableHeadButton>
              </TableCell>
            );
          })}
        </S.TableHeadRow>
      ))}
    </S.TableHead>
  );
}
