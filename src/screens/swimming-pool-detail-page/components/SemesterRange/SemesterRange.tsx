import { Skeleton } from '~/ui/components/atoms';
import { convertDateToString } from '~/utils/date';
import { joinValues } from '~/utils/format';

import * as S from './SemesterRange.style';

interface SemesterRangeProps {
  semesterFrom?: string;
  semesterTo?: string;
  isLoading?: boolean;
}

export function SemesterRange({
  semesterFrom,
  semesterTo,
  isLoading,
}: SemesterRangeProps) {
  if (isLoading) {
    return <Skeleton height="2.4rem" width="20rem" />;
  }

  if (
    !isLoading &&
    (typeof semesterFrom !== 'string' || typeof semesterTo !== 'string')
  ) {
    return null;
  }

  return (
    <S.SemesterRangeText variant="body3">
      {joinValues(
        [
          convertDateToString(new Date(semesterFrom as string)),
          convertDateToString(new Date(semesterTo as string)),
        ],
        { separator: ' - ' }
      )}
    </S.SemesterRangeText>
  );
}
