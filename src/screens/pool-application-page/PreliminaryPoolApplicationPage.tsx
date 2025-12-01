import { Headline, MaxWidth, VerticalStack } from '~/ui/components/atoms';
import {
  getCategoryNameByCategoryId,
  getCategoryNameBySlug,
} from '~/utils/category';
import { ApplicationForm } from './parts';

import { useRouter } from 'next/router';
import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { Text } from '~/ui/components/atoms';
import {
  getPreliminarySpreadsheetIdByCategoryId,
  getTemplateIdByCategoryId,
} from '~/utils/sheets';
import * as S from './PoolApplicationPage.style';
import { PreliminaryApplicationsClosed } from './parts/PreliminaryApplicationsClosed';

interface PreliminaryPoolApplicationPageProps {
  categoryId: string;
  hasLectures: boolean;
}

export function PreliminaryPoolApplicationPage({
  categoryId,
  hasLectures,
}: PreliminaryPoolApplicationPageProps) {
  const router = useRouter();

  const spreadsheetId = getPreliminarySpreadsheetIdByCategoryId(categoryId);
  const templateId = getTemplateIdByCategoryId(categoryId);

  if (!spreadsheetId) {
    return null;
  }

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    {
      label: getCategoryNameBySlug(router.query.categoryId as string),
      href: `/bazeny/luzanky/${router.query.categoryId}`,
    },
    {
      label: 'Přihlášky',
      href: `/bazeny/luzanky/${router.query.categoryId}/prihlasky`,
    },
  ];

  if (!hasLectures) {
    return <PreliminaryApplicationsClosed />;
  }

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <S.ApplicationPageSection>
        <MaxWidth>
          <VerticalStack gap="1rem">
            <Text variant="body3">Předběžná přihláška</Text>
            <Headline>{getCategoryNameByCategoryId(categoryId)}</Headline>
          </VerticalStack>

          <ApplicationForm
            categoryId={categoryId}
            spreadsheetId={spreadsheetId}
            templateId={templateId}
          />
        </MaxWidth>
      </S.ApplicationPageSection>
    </BreadcrumbsLayout>
  );
}
