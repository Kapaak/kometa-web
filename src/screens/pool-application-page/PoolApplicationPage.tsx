import { useRouter } from 'next/router';

import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { SwimmingPoolId } from '~/types/swimming-pool';
import { Headline, MaxWidth } from '~/ui/components/atoms';
import {
  getCategoryNameByCategoryId,
  getCategoryNameBySlug,
} from '~/utils/category';
import {
  getSheetTabIdByCategoryId,
  getTemplateIdByCategoryId,
} from '~/utils/swimming-pool-application';

import { ApplicationsClosed } from './parts/ApplicationsClosed';

import { ApplicationForm } from './parts';

import * as S from './PoolApplicationPage.style';

interface PoolApplicationPageProps {
  categoryId: string;
}

export function PoolApplicationPage({ categoryId }: PoolApplicationPageProps) {
  const router = useRouter();

  const sheetTabId = getSheetTabIdByCategoryId(
    SwimmingPoolId.LUZANKY,
    categoryId
  );
  const templateId = getTemplateIdByCategoryId(
    SwimmingPoolId.LUZANKY,
    categoryId
  );

  if (!sheetTabId) {
    return (
      <ApplicationsClosed message="Přihlášky pro tento kurz zatím nejsou otevřené." />
    );
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

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <S.ApplicationPageSection>
        <MaxWidth>
          <Headline>{getCategoryNameByCategoryId(categoryId)}</Headline>
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
