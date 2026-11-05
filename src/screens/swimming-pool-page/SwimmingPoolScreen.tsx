import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { useInfoBarStatus } from '~/hooks/useInfoBar';
import { VerticalStack } from '~/ui/components/atoms';
import { InfoBar } from '~/ui/components/molecules/InfoBar';
import { getSwimmingPoolPath } from '~/utils/swimming-pool';

import { useSwimmingPoolPageContext } from './contexts/SwimmingPoolContext';

import {
  PoolAboutSection,
  PoolBasicInfoSection,
  PoolContactSection,
  PoolFAQSection,
  PoolHeroSection,
  PoolServiceSection,
} from './parts';

export function SwimmingPoolScreen() {
  const { id, name } = useSwimmingPoolConfig();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: name, href: getSwimmingPoolPath(id) },
  ];

  const { visible, toggleVisibility } = useInfoBarStatus();

  const { swimmingPool } = useSwimmingPoolPageContext();

  return (
    <BreadcrumbsLayout
      breadcrumbs={breadcrumbs}
      informationBar={
        <InfoBar
          visible={visible && Boolean(swimmingPool?.infoBar?.value)}
          value={swimmingPool?.infoBar?.value ?? ''}
          onClose={toggleVisibility}
        />
      }
    >
      <VerticalStack gap="2rem">
        <PoolHeroSection />
        <PoolAboutSection />
        <PoolServiceSection />
        <PoolBasicInfoSection />
        <PoolFAQSection />
        <PoolContactSection />
      </VerticalStack>
    </BreadcrumbsLayout>
  );
}
