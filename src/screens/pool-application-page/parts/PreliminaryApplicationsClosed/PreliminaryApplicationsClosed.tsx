import { PageLayout } from '~/ui/components/templates';
import * as S from './PreliminaryApplicationsClosed.style';

import { Text } from '~/ui/components/atoms';

export function PreliminaryApplicationsClosed() {
  return (
    <PageLayout>
      <S.PreliminaryApplicationsClosed>
        <Text variant="body1" align="center">
          Předběžné přihlášky pro tento kurz jsou momentálně uzavřeny.
        </Text>
      </S.PreliminaryApplicationsClosed>
    </PageLayout>
  );
}
