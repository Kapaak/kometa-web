import NextLink from 'next/link';
import { useCallback, useMemo, useState } from 'react';

import {
  SortingState,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useTheme } from 'styled-components';

import { GetAvailableCourse } from '~/domains';
import { Button, Text } from '~/ui/components/atoms';
import { joinValues } from '~/utils/format';

//prevents infinite loop for react-table when courses is empty (on load)
const EMPTY_ARRAY: GetAvailableCourse[] = [];

export function useAvailableCoursesTable(
  courses: GetAvailableCourse[] = EMPTY_ARRAY
) {
  const [sortBy, setSortBy] = useState<SortingState>([]);
  const theme = useTheme();
  const { grey } = theme.colors;

  const getAvailabilityColor = useCallback(
    (isFull?: boolean) => (isFull ? grey['600'] : grey['900']),
    [grey]
  );

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<GetAvailableCourse>();

    return [
      columnHelper.accessor('name', {
        header: 'Bazén',
        cell: (info) => {
          const { isFull } = info.row.original ?? {};

          return (
            <Text variant="body3" color={getAvailabilityColor(isFull)}>
              {info.getValue()}
            </Text>
          );
        },
      }),
      columnHelper.accessor('skillLevelName', {
        header: 'Úroveň',
        meta: {
          align: 'center',
        },
        cell: (info) => {
          const { isFull } = info.row.original ?? {};
          return (
            <Text variant="body2" color={getAvailabilityColor(isFull)}>
              {info.getValue()}
            </Text>
          );
        },
      }),
      columnHelper.accessor('day', {
        header: 'Den',
        meta: {
          align: 'center',
        },
        cell: (info) => {
          const { isFull } = info.row.original ?? {};

          return (
            <Text variant="body2" color={getAvailabilityColor(isFull)}>
              {info.getValue()}
            </Text>
          );
        },
      }),
      columnHelper.accessor('timeFrom', {
        header: 'Čas',
        meta: {
          align: 'center',
        },
        cell: (info) => {
          const { timeTo, isFull } = info.row.original ?? {};

          return (
            <Text
              style={{ whiteSpace: 'nowrap' }}
              variant="body2"
              color={getAvailabilityColor(isFull)}
            >
              {joinValues([info.getValue(), timeTo], { separator: ' - ' })}
            </Text>
          );
        },
      }),
      columnHelper.accessor('ageFrom', {
        header: 'Věk',
        meta: {
          align: 'center',
        },
        cell: (info) => {
          const { ageTo, isFull } = info.row.original ?? {};

          return (
            <Text
              variant="body2"
              color={getAvailabilityColor(isFull)}
              style={{ whiteSpace: 'nowrap' }}
            >
              {joinValues([info.getValue(), ageTo], { separator: ' - ' })} let
            </Text>
          );
        },
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Možnosti',
        cell: (info) => {
          const { isFull, url } = info.row.original ?? {};

          return (
            <Button
              size="small"
              color={isFull ? 'grey' : 'tetriary'}
              disabled={isFull}
              customColor={isFull ? grey['800'] : grey['900']}
              style={{ display: 'inline-flex' }}
            >
              {isFull && <span>Obsazeno</span>}
              {!isFull && <NextLink href={url ?? ''}>Zobrazit kurz</NextLink>}
            </Button>
          );
        },
        enableSorting: false,
        meta: {
          align: 'center',
          cursor: 'auto',
        },
      }),
    ];
  }, [getAvailabilityColor, grey]);

  const table = useReactTable({
    data: courses,
    columns,
    state: {
      sorting: sortBy,
    },
    onSortingChange: setSortBy,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return {
    table,
  };
}
