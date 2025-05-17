import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';

import { CampsSection } from './parts';

interface CampsScreenProps {
  camps: any[];
}

export function CampsScreen({ camps }: CampsScreenProps) {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Tábory', href: '/tabory' },
  ];

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <CampsSection camps={camps} />
    </BreadcrumbsLayout>
  );
}
