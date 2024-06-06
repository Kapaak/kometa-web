import { ReactNode } from 'react';

import { HeaderGroup, RowModel } from '@tanstack/react-table';
import { useTheme } from 'styled-components';

import { Loader } from '../../atoms';
import { TableBody, TableHead } from '../../molecules';

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
  const theme = useTheme();
  const { primary } = theme.colors;

  return (
    <>
      <S.Table>
        <TableHead rows={headerCells} />
        <TableBody
          rows={bodyCells}
          showNoData={showNoData}
          noDataChildren={noDataChildren}
        />
      </S.Table>
      {isLoading && (
        <S.TableLoadingBox>
          <Loader color={primary.main} />
        </S.TableLoadingBox>
      )}
    </>
  );
}
