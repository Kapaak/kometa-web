import { TransformedKidsCourse } from '~/types';

import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { KidsCoursesSection } from './parts';

interface KidsCoursesScreenProps {
  courses: TransformedKidsCourse[];
}

export function KidsCoursesScreen({ courses }: KidsCoursesScreenProps) {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Kurzy pro děti', href: '/kurzy-pro-deti' },
  ];

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <KidsCoursesSection courses={courses} />
    </BreadcrumbsLayout>
  );
}
