import { useTheme } from 'styled-components';

import { GetAvailableCourse } from '~/domains';
import { Loader } from '~/ui/components/atoms';

import { AvailableCoursesTableEmpty } from '../AvailableCoursesTableEmpty';
import { AvailableCoursesTableError } from '../AvailableCoursesTableError';
import { MobileAvailableCoursesTableItem } from '../MobileAvailableCoursesTableItem';

import * as S from './MobileAvailableCoursesTable.style';

interface MobileAvailableCoursesTableProps {
  availableCourses: GetAvailableCourse[];
  isLoading?: boolean;
  isError?: boolean;
}

export function MobileAvailableCoursesTable({
  availableCourses,
  isLoading,
  isError,
}: MobileAvailableCoursesTableProps) {
  const theme = useTheme();
  const { primary } = theme.colors;

  if (isLoading) {
    return (
      <S.MobileAvailableCoursesTableLoadingWrapper>
        <Loader color={primary.main} />
      </S.MobileAvailableCoursesTableLoadingWrapper>
    );
  }

  if (isError && !isLoading) {
    return <AvailableCoursesTableError />;
  }

  if (!isLoading && !isError && !isLoading && availableCourses?.length === 0) {
    return <AvailableCoursesTableEmpty />;
  }

  return (
    <S.MobileAvailableCoursesTable>
      {availableCourses?.map((course) => (
        <MobileAvailableCoursesTableItem
          key={course?.id}
          availableCourse={course}
        />
      ))}
    </S.MobileAvailableCoursesTable>
  );
}
