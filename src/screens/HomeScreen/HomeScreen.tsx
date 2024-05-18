import { Sponsors } from '~/components';
import { PageLayout } from '~/ui/components/templates';

import { Questionnaire } from './components';

import { ServicesSection } from './parts';

interface HomeScreenProps {}

export function HomeScreen({}: HomeScreenProps) {
  return (
    <PageLayout>
      <ServicesSection />
      <Questionnaire />
      <Sponsors />
    </PageLayout>
  );
}
