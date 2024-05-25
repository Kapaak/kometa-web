import { TransformedKidsCourse } from '~/types';

import { KidsCoursesLayout } from './components';

import { KidsCoursesSection } from './parts';

interface KidsCoursesScreenProps {
  courses: TransformedKidsCourse[];
}

export function KidsCoursesScreen({ courses }: KidsCoursesScreenProps) {
  return (
    <KidsCoursesLayout>
      <KidsCoursesSection courses={courses} />
    </KidsCoursesLayout>
  );
}
