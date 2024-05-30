import { MaxWidth } from '~/ui/components/atoms';

import { AvailableCoursesFilter } from '../../components';

import * as S from './AvailableCoursesSection.style';

interface AvailableCoursesSectionProps {}

export function AvailableCoursesSection({}: AvailableCoursesSectionProps) {
  return (
    <S.AvailableCoursesSection>
      <MaxWidth>
        <AvailableCoursesFilter />
      </MaxWidth>
    </S.AvailableCoursesSection>
  );
}
