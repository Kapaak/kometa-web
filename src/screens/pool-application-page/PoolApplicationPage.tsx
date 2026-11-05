import { useRouter } from 'next/router';

import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { Headline, MaxWidth } from '~/ui/components/atoms';
import {
  getCategoryNameByCategoryId,
  getCategoryNameBySlug,
} from '~/utils/category';
import { getSwimmingPoolPath } from '~/utils/swimming-pool';

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

  const { id, name } = useSwimmingPoolConfig();
  const poolPath = getSwimmingPoolPath(id);

  if (!applicationsOpen) {
    return (
      <ApplicationsClosed message="Přihlášky pro tento kurz zatím nejsou otevřené." />
    );
  }

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: name, href: poolPath },
    {
      label: getCategoryNameBySlug(router.query.categoryId as string),
      href: `${poolPath}/${router.query.categoryId}`,
    },
    {
      label: 'Přihlášky',
      href: `${poolPath}/${router.query.categoryId}/prihlasky`,
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
