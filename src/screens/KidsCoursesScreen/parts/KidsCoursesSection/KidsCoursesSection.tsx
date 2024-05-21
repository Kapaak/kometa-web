import { TransformedKidsCourse } from '~/types';
import { MaxWidth } from '~/ui/components/atoms';

import { CoursesWithTitle } from '../../components';

import * as S from './KidsCoursesSection.style';

interface KidsCoursesSectionProps {
  courses: TransformedKidsCourse[];
}

export function KidsCoursesSection({ courses }: KidsCoursesSectionProps) {
  const privatePoolCourse = courses?.filter(
    (course) => course.privateSwimmingPool
  );
  const publicPoolCourse = courses?.filter(
    (course) => !course.privateSwimmingPool
  );

  return (
    <S.KidsCoursesSection>
      <MaxWidth>
        <S.KidsCoursesContainer>
          <CoursesWithTitle title="Veřejné bazény" courses={publicPoolCourse} />
          <CoursesWithTitle title="Školní bazény" courses={privatePoolCourse} />
        </S.KidsCoursesContainer>
      </MaxWidth>
    </S.KidsCoursesSection>
  );
}
