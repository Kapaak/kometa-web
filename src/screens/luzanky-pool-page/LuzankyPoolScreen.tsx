import { LuzankyPoolLayout } from './components';
import {
  LuzankyAboutSection,
  LuzankyBasicInfoSection,
  LuzankyDocumentSection,
  LuzankyHeroSection,
  LuzankyServiceSection,
} from './parts';

interface LuzankyPoolScreenProps {}

export function LuzankyPoolScreen({}: LuzankyPoolScreenProps) {
  return (
    <LuzankyPoolLayout>
      <LuzankyHeroSection />
      <LuzankyAboutSection />
      <LuzankyServiceSection />
      <LuzankyDocumentSection />
      <LuzankyBasicInfoSection />
    </LuzankyPoolLayout>
  );
}
