import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { VerticalStack } from '~/ui/components/atoms';
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

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
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
