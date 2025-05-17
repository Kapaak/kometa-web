import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { FoundersCupSection } from './parts';

export function FoundersCupScreen() {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Pohár zakladatelů', href: '/souteze/pohar-zakladatelu' },
  ];

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <FoundersCupSection />
    </BreadcrumbsLayout>
  );
}
