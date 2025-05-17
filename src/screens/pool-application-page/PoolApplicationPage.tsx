import { Headline, MaxWidth } from '~/ui/components/atoms';
import {
  getCategoryNameByCategoryId,
  getCategoryNameBySlug,
} from '~/utils/category';
import { ApplicationForm } from './parts';

import { useRouter } from 'next/router';
import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { SwimmingPoolId } from '~/types';
import {
  getSpreadsheetIdByCategoryId,
  getTemplateIdByCategoryId,
} from '~/utils/sheets';
import * as S from './PoolApplicationPage.style';
import { ApplicationFormContextProvider } from './contexts/ApplicationFormContext';

interface PoolApplicationPageProps {
  categoryId: string;
}

export function PoolApplicationPage({ categoryId }: PoolApplicationPageProps) {
  const router = useRouter();

  const spreadsheetId = getSpreadsheetIdByCategoryId(categoryId);
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

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <S.ApplicationPageSection>
        <MaxWidth>
          <Headline>{getCategoryNameByCategoryId(categoryId)}</Headline>
          <ApplicationFormContextProvider
            swimmingPoolId={SwimmingPoolId.LUZANKY}
            categoryId={categoryId}
          >
            <ApplicationForm
              categoryId={categoryId}
              spreadsheetId={spreadsheetId}
              templateId={templateId}
            />
          </ApplicationFormContextProvider>
        </MaxWidth>
      </S.ApplicationPageSection>
    </BreadcrumbsLayout>
  );
}
