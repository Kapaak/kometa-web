import { PageLayout } from '~/ui/components/templates';

import { CampsSection } from './parts';

interface CampsScreenProps {
  camps: any[];
}

export function CampsScreen({ camps }: CampsScreenProps) {
  return (
    <PageLayout>
      <main>
        <CampsSection camps={camps} />
      </main>
    </PageLayout>
  );
}
