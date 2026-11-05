import { useRouter } from 'next/router';

import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { Headline, MaxWidth } from '~/ui/components/atoms';
import {
  getCategoryNameByCategoryId,
  getCategoryNameBySlug,
} from '~/utils/category';

import { ApplicationsClosed } from './parts/ApplicationsClosed';

import { ApplicationForm } from './parts';

import * as S from './PoolApplicationPage.style';

interface PoolApplicationPageProps {
  categoryId: string;
  applicationsOpen: boolean;
}

export function PoolApplicationPage({
  categoryId,
  applicationsOpen,
}: PoolApplicationPageProps) {
  const router = useRouter();

  if (!applicationsOpen) {
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
          <ApplicationForm categoryId={categoryId} />
        </MaxWidth>
      </S.ApplicationPageSection>
    </BreadcrumbsLayout>
  );
}
