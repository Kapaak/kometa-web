import { ReactNode } from 'react';

import { HeaderGroup, RowModel } from '@tanstack/react-table';

// import { TableBody, TableHead } from '../../molecules';
import { TableBody } from '../../molecules';
import { TableHead } from '../../molecules/TableHead';

import * as S from './Table.style';

export interface TableProps<T> {
  headerCells?: HeaderGroup<T>[];
  footerCells?: HeaderGroup<T>[];
  bodyCells?: RowModel<T>;
  isLoading?: boolean;
  showNoData?: boolean;
  noDataChildren?: ReactNode;
}

export function Table<T>({
  bodyCells,
  footerCells,
  noDataChildren,
  headerCells,
  isLoading,
  showNoData,
}: TableProps<T>) {
  return (
    <S.Table>
      <TableHead rows={headerCells} />
      <TableBody
        rows={bodyCells}
        showNoData={showNoData}
        noDataChildren={noDataChildren}
      />
    </S.Table>
  );
}
