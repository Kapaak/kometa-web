import { CampsLayout } from './components';

import { CampsSection } from './parts';

interface CampsScreenProps {
  camps: any[];
}

export function CampsScreen({ camps }: CampsScreenProps) {
  return (
    <CampsLayout>
      <CampsSection camps={camps} />
    </CampsLayout>
  );
}
