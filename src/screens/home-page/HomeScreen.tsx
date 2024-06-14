import { Sponsors } from '~/components';
import { PageLayout } from '~/ui/components/templates';

import {
  ContactSection,
  HeroSection,
  QuestionnaireSection,
  ServicesSection,
} from './parts';

import * as S from './HomeScreen.style';

export function HomeScreen() {
  return (
    <PageLayout>
      <S.HomeScreenMain>
        <HeroSection />
        <ServicesSection />
        <QuestionnaireSection />
        <ContactSection />
        <Sponsors />
      </S.HomeScreenMain>
    </PageLayout>
  );
}
