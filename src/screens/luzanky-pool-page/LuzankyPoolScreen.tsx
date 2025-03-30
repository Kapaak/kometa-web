import { LuzankyPoolLayout } from './components';
import {
  LuzankyAboutSection,
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
    </LuzankyPoolLayout>
  );
}
