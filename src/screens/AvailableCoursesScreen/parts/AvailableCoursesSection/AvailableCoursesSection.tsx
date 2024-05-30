import { MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';
import { Table } from '~/ui/components/organisms';

import { AvailableCoursesFilter } from '../../components';
import { useAvailableCoursesTable } from '../../hooks';

import * as S from './AvailableCoursesSection.style';

interface AvailableCoursesSectionProps {}

export function AvailableCoursesSection({}: AvailableCoursesSectionProps) {
  const { table } = useAvailableCoursesTable();

  const isLoading = false;
  return (
    <S.AvailableCoursesSection>
      <MaxWidth>
        <AvailableCoursesFilter />
        <Table
          headerCells={table?.getHeaderGroups()}
          bodyCells={table?.getRowModel()}
          showNoData={!isLoading && table?.getRowModel()?.rows?.length === 0}
          noDataChildren={
            <VerticalStack>
              <Text variant="body2">Nenalezeno.</Text>
            </VerticalStack>
          }
        />
      </MaxWidth>
    </S.AvailableCoursesSection>
  );
}
