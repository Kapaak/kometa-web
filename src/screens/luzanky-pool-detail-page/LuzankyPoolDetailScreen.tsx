import { LuzankyPoolDetailLayout } from './components';
import { LuzankyDetailHeroSection } from './parts';

interface LuzankyPoolDetailScreenProps {}

export function LuzankyPoolDetailScreen({}: LuzankyPoolDetailScreenProps) {
  return (
    <LuzankyPoolDetailLayout>
      <LuzankyDetailHeroSection />
    </LuzankyPoolDetailLayout>
  );
}
