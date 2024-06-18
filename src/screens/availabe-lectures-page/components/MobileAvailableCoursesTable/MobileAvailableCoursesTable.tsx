import { GetAvailableCourse } from '~/domains';

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
