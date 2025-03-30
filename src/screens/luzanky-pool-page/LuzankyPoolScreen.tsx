import { LuzankyPoolLayout } from './components';
import {
  LuzankyAboutSection,
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
    </LuzankyPoolLayout>
  );
}
