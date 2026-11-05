import { Text } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './ApplicationsClosed.style';

interface ApplicationsClosedProps {
  message: string;
}

export function ApplicationsClosed({ message }: ApplicationsClosedProps) {
  return (
    <PageLayout>
      <S.ApplicationsClosed>
        <Text variant="body1" align="center">
          {message}
        </Text>
      </S.ApplicationsClosed>
    </PageLayout>
  );
}
