import { LuzankyPoolDetailLayout } from './components';
import {
  LuzankyDetailHeroSection,
  LuzankyDetailSkillLevelSection,
} from './parts';

interface LuzankyPoolDetailScreenProps {}

export function LuzankyPoolDetailScreen({}: LuzankyPoolDetailScreenProps) {
  return (
    <LuzankyPoolDetailLayout>
      <LuzankyDetailHeroSection />
      <LuzankyDetailSkillLevelSection />
    </LuzankyPoolDetailLayout>
  );
}
