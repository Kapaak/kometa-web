import { TransformedKidsCourse } from '~/types';
import { PageLayout } from '~/ui/components/templates';

import { KidsCoursesSection } from './parts';

interface KidsCoursesScreenProps {
  courses: TransformedKidsCourse[];
}

export function KidsCoursesScreen({ courses }: KidsCoursesScreenProps) {
  return (
    <PageLayout>
      <main>
        <KidsCoursesSection courses={courses} />
      </main>
    </PageLayout>
  );
}
