import { LuzankyPoolDetailLayout } from './components';
import {
  LuzankyDetailAboutSection,
  LuzankyDetailFirstLectureSection,
  LuzankyDetailHeroSection,
  LuzankyDetailSkillLevelSection,
} from './parts';

export function LuzankyPoolDetailScreen() {
  return (
    <LuzankyPoolDetailLayout>
      <LuzankyDetailHeroSection />
      <LuzankyDetailSkillLevelSection />
      <LuzankyDetailAboutSection />
      <LuzankyDetailFirstLectureSection />
    </LuzankyPoolDetailLayout>
  );
}
