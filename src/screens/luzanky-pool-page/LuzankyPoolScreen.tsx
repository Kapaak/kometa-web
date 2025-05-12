import { VerticalStack } from '~/ui/components/atoms';
import { LuzankyPoolLayout } from './components';
import {
  LuzankyAboutSection,
  LuzankyBasicInfoSection,
  LuzankyContactSection,
  LuzankyFAQSection,
  LuzankyHeroSection,
  LuzankyServiceSection,
} from './parts';

interface LuzankyPoolScreenProps {}

export function LuzankyPoolScreen({}: LuzankyPoolScreenProps) {
  return (
    <LuzankyPoolLayout>
      <VerticalStack gap="2rem">
        <LuzankyHeroSection />
        <LuzankyAboutSection />
        <LuzankyServiceSection />
        {/* <LuzankyDocumentSection /> */}
        <LuzankyBasicInfoSection />
        <LuzankyFAQSection />
        <LuzankyContactSection />
      </VerticalStack>
    </LuzankyPoolLayout>
  );
}
