import { Sponsors } from '~/components';
import { PageLayout } from '~/ui/components/templates';

import { HeroSection, QuestionnaireSection, ServicesSection } from './parts';

import * as S from './HomeScreen.style';

export function HomeScreen() {
  return (
    <PageLayout>
      <S.HomeScreenMain>
        <HeroSection />
        <ServicesSection />
        <QuestionnaireSection />
        <Sponsors />
      </S.HomeScreenMain>
    </PageLayout>
  );
}
