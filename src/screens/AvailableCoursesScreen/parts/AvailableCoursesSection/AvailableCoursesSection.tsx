import { useAvailableCourses } from '~/adapters';
import {
  InfiniteScrollObserver,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { Table } from '~/ui/components/organisms';

import { AvailableCoursesFilter } from '../../components';
import { useAvailableCoursesFilterContext } from '../../contexts';
import { useAvailableCoursesTable } from '../../hooks';

import * as S from './AvailableCoursesSection.style';

export function AvailableCoursesSection() {
  const { filter } = useAvailableCoursesFilterContext();

  const { data, fetchNextPage, hasNextPage, isLoading } = useAvailableCourses({
    filter,
  });

  const { table } = useAvailableCoursesTable(data);

  return (
    <S.AvailableCoursesSection>
      <MaxWidth>
        <AvailableCoursesFilter />
        <S.Scrollable>
          <Table
            isLoading={isLoading}
            headerCells={table?.getHeaderGroups()}
            bodyCells={table?.getRowModel()}
            showNoData={!isLoading && table?.getRowModel()?.rows?.length === 0}
            noDataChildren={
              <VerticalStack>
                <Text variant="body2">Nenalezeno.</Text>
              </VerticalStack>
            }
          />
        </S.Scrollable>
      </MaxWidth>
      <InfiniteScrollObserver
        hasNextPage={hasNextPage}
        onLoadNextPage={() => void fetchNextPage()}
      />
    </S.AvailableCoursesSection>
  );
}
