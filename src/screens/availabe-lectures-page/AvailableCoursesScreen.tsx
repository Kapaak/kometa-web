import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';

import { AvailableCoursesSection } from './parts';

export function AvailableCoursesScreen() {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Letní kurzy a akce', href: '/dostupne-lekce' },
  ];

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <AvailableCoursesSection />
    </BreadcrumbsLayout>
  );
}
