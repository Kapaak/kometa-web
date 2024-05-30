import { useMemo, useState } from 'react';

import {
  SortingState,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button, Text } from '~/ui/components/atoms';

type AvailableCourseTable = {
  name?: string;
  skillLevel?: string;
  day?: string;
  time?: string;
  age?: string;
  capacity?: string;
};

export function useAvailableCoursesTable() {
  const [sortBy, setSortBy] = useState<SortingState>([
    { id: 'name', desc: true },
  ]);

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<AvailableCourseTable>();

    return [
      columnHelper.accessor('name', {
        header: 'Bazén',
        cell: (info) => <Text variant="body3">{info.getValue()}</Text>,
      }),
      columnHelper.accessor('skillLevel', {
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
      columnHelper.accessor('time', {
        header: 'Čas',
        meta: {
          align: 'center',
        },
        cell: (info) => <Text variant="body2">{info.getValue()}</Text>,
      }),
      columnHelper.accessor('age', {
        header: 'Věk',
        meta: {
          align: 'center',
        },
        cell: (info) => <Text variant="body2">{info.getValue()}</Text>,
      }),
      columnHelper.accessor('capacity', {
        header: 'Kapacita',
        meta: {
          align: 'center',
        },
        cell: (info) => <Text variant="body2">{info.getValue()}</Text>,
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
              Zobrazit kurz
            </Button>
          );
        },
        enableSorting: false,
        meta: {
          align: 'center',
          bodyCellSx: {
            maxWidth: '6.6rem',
          },
          headerCellSx: {
            maxWidth: '6.6rem',
          },
        },
      }),
    ];
  }, []);

  const data: AvailableCourseTable[] = useMemo(
    () => [
      {
        name: 'Kohoutovice',
        skillLevel: 'začátečník',
        day: 'pondělí',
        time: '18-19',
        age: 'mladi',
        capacity: 'full',
      },
      {
        name: 'Kohoutovice',
        skillLevel: 'začátečník',
        day: 'pondělí',
        time: '18-19',
        age: 'mladi',
        capacity: 'full',
      },
      {
        name: 'Lužánky',
        skillLevel: 'začátečník',
        day: 'pondělí',
        time: '18-19',
        age: 'mladi',
        capacity: 'full',
      },
    ],
    []
  );

  const table = useReactTable({
    data,
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
