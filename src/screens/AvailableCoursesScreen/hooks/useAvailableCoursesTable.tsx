import NextLink from 'next/link';
import { useMemo, useState } from 'react';

import {
  SortingState,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { GetAPICourse } from '~/domains';
import { Button, Text } from '~/ui/components/atoms';
import { joinValues } from '~/utils/format';

//prevents infinite loop for react-table when courses is empty (on load)
const EMPTY_ARRAY: GetAPICourse[] = [];

export function useAvailableCoursesTable(
  courses: GetAPICourse[] = EMPTY_ARRAY
) {
  const [sortBy, setSortBy] = useState<SortingState>([]);

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<GetAPICourse>();

    return [
      columnHelper.accessor('name', {
        header: 'Bazén',
        cell: (info) => <Text variant="body3">{info.getValue()}</Text>,
      }),
      columnHelper.accessor('skillLevelName', {
        header: 'Úroveň',
        meta: {
          align: 'center',
        },
        cell: (info) => <Text variant="body2">{info.getValue()}</Text>,
      }),
      columnHelper.accessor('day', {
        header: 'Den',
        meta: {
          align: 'center',
        },
        cell: (info) => <Text variant="body2">{info.getValue()}</Text>,
      }),
      columnHelper.accessor('timeFrom', {
        header: 'Čas',
        meta: {
          align: 'center',
        },
        cell: (info) => {
          const { timeTo } = info.row.original ?? {};

          return (
            <Text variant="body2">
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
          const { ageTo } = info.row.original ?? {};

          return (
            <Text variant="body2">
              {joinValues([info.getValue(), ageTo], { separator: ' - ' })} let
            </Text>
          );
        },
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Možnosti',
        cell: (info) => {
          return (
            <Button
              size="small"
              color="tetriary"
              customColor="#000"
              style={{ display: 'inline-flex' }}
            >
              <NextLink href={info.row.original?.url}>Zobrazit kurz</NextLink>
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
  }, []);

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
