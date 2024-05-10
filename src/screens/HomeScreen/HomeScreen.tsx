import { Sponsors } from '~/components';
import { PageLayout } from '~/ui/components/templates';

import { Questionnaire } from './components';

interface HomeScreenProps {}

export function HomeScreen({}: HomeScreenProps) {
  return (
    <PageLayout>
      <Questionnaire />
      <Sponsors />
    </PageLayout>
  );
}
