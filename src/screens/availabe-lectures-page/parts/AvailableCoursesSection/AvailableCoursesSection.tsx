import { useGetAvailableCourses } from '~/adapters';
import {
  Hidden,
  InfiniteScrollObserver,
  MaxWidth,
} from '~/ui/components/atoms';
import { Table } from '~/ui/components/organisms';

import {
  AvailableCoursesFilter,
  AvailableCoursesTableEmpty,
  AvailableCoursesTableError,
  MobileAvailableCoursesTable,
} from '../../components';
import { useAvailableCoursesFilterContext } from '../../contexts';
import { useAvailableCoursesTable } from '../../hooks';

import * as S from './AvailableCoursesSection.style';

export function AvailableCoursesSection() {
  const { filter } = useAvailableCoursesFilterContext();

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useGetAvailableCourses({
      filter,
    });

  const { table } = useAvailableCoursesTable(data);

  return (
    <S.AvailableCoursesSection>
      <MaxWidth>
        <AvailableCoursesFilter />
        <Hidden down="md">
          <S.Scrollable>
            <Table
              isLoading={isLoading}
              headerCells={table?.getHeaderGroups()}
              bodyCells={table?.getRowModel()}
              showNoData={
                !isLoading && table?.getRowModel()?.rows?.length === 0
              }
              noDataChildren={
                <>
                  {isError && <AvailableCoursesTableError />}
                  {!isError && <AvailableCoursesTableEmpty />}
                </>
              }
            />
          </S.Scrollable>
        </Hidden>
        <Hidden up="md">
          <MobileAvailableCoursesTable
            availableCourses={data}
            isLoading={isLoading}
            isError={isError}
          />
        </Hidden>
      </MaxWidth>
      <InfiniteScrollObserver
        hasNextPage={hasNextPage}
        onLoadNextPage={() => void fetchNextPage()}
      />
    </S.AvailableCoursesSection>
  );
}
