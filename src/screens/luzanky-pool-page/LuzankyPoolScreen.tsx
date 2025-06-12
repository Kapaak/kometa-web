import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { useInfoBarStatus } from '~/hooks/useInfoBar';
import { VerticalStack } from '~/ui/components/atoms';
import { InfoBar } from '~/ui/components/molecules/InfoBar';
import { useSwimmingPoolPageContext } from './contexts/SwimmingPoolContext';
import {
  LuzankyAboutSection,
  LuzankyBasicInfoSection,
  LuzankyContactSection,
  LuzankyFAQSection,
  LuzankyHeroSection,
  LuzankyServiceSection,
} from './parts';

export function LuzankyPoolScreen() {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: 'Lužánky', href: '/bazeny/luzanky' },
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
        <LuzankyHeroSection />
        <LuzankyAboutSection />
        <LuzankyServiceSection />
        <LuzankyBasicInfoSection />
        <LuzankyFAQSection />
        <LuzankyContactSection />
      </VerticalStack>
    </BreadcrumbsLayout>
  );
}
