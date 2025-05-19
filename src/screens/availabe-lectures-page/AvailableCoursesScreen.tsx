import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';

import { AvailableCoursesSection } from './parts';

export function AvailableCoursesScreen() {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Dostupné lekce', href: '/dostupne-lekce' },
  ];

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <AvailableCoursesSection />
    </BreadcrumbsLayout>
  );
}
