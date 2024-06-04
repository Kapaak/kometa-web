import { MaxWidth } from '~/ui/components/atoms';

import { AvailableCoursesFilter } from '../../components';

import * as S from './AvailableCoursesSection.style';

interface AvailableCoursesSectionProps {
  filter?: {
    age: number;
  };
}

export function AvailableCoursesSection({
  filter,
}: AvailableCoursesSectionProps) {
  // const { data, isLoading, isError } = useAvailableCourses({
  //   filter,
  // });

  // const { table } = useAvailableCoursesTable(data);

  return (
    <S.AvailableCoursesSection>
      <MaxWidth>
        <AvailableCoursesFilter />
        <S.Scrollable>
          {/* <Table
            headerCells={table?.getHeaderGroups()}
            bodyCells={table?.getRowModel()}
            showNoData={!isLoading && table?.getRowModel()?.rows?.length === 0}
            noDataChildren={
              <VerticalStack>
                <Text variant="body2">Nenalezeno.</Text>
              </VerticalStack>
            }
          /> */}
        </S.Scrollable>
      </MaxWidth>
    </S.AvailableCoursesSection>
  );
}
