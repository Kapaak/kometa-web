import { useRouter } from 'next/router';

import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { SwimmingPoolId } from '~/types/swimming-pool';
import { Headline, MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';
import {
  getCategoryNameByCategoryId,
  getCategoryNameBySlug,
} from '~/utils/category';
import {
  getPreliminarySheetTabIdByCategoryId,
  getTemplateIdByCategoryId,
} from '~/utils/swimming-pool-application';

import { ApplicationsClosed } from './parts/ApplicationsClosed';

import { ApplicationForm } from './parts';

import * as S from './PoolApplicationPage.style';

const CLOSED_MESSAGE =
  'Předběžné přihlášky pro tento kurz jsou momentálně uzavřeny.';

interface PreliminaryPoolApplicationPageProps {
  categoryId: string;
  hasLectures: boolean;
}

export function PreliminaryPoolApplicationPage({
  categoryId,
  hasLectures,
}: PreliminaryPoolApplicationPageProps) {
  const router = useRouter();

  const sheetTabId = getPreliminarySheetTabIdByCategoryId(
    SwimmingPoolId.LUZANKY,
    categoryId
  );
  const templateId = getTemplateIdByCategoryId(
    SwimmingPoolId.LUZANKY,
    categoryId
  );

  if (!sheetTabId) {
    return <ApplicationsClosed message={CLOSED_MESSAGE} />;
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
    return <ApplicationsClosed message={CLOSED_MESSAGE} />;
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
            sheetTabId={sheetTabId}
            templateId={templateId}
          />
        </MaxWidth>
      </S.ApplicationPageSection>
    </BreadcrumbsLayout>
  );
}
