import { useRouter } from 'next/router';

import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { Headline, MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';
import {
  getCategoryNameByCategoryId,
  getCategoryNameBySlug,
} from '~/utils/category';
import { getSwimmingPoolPath } from '~/utils/swimming-pool';

import { ApplicationsClosed } from './parts/ApplicationsClosed';

import { ApplicationForm } from './parts';

import * as S from './PoolApplicationPage.style';

const CLOSED_MESSAGE =
  'Předběžné přihlášky pro tento kurz jsou momentálně uzavřeny.';

interface PreliminaryPoolApplicationPageProps {
  categoryId: string;
  // False when the category has no preliminary sheet tab or no preliminary lectures.
  applicationsOpen: boolean;
}

export function PreliminaryPoolApplicationPage({
  categoryId,
  applicationsOpen,
}: PreliminaryPoolApplicationPageProps) {
  const router = useRouter();

  const { id, name } = useSwimmingPoolConfig();
  const poolPath = getSwimmingPoolPath(id);

  if (!applicationsOpen) {
    return <ApplicationsClosed message={CLOSED_MESSAGE} />;
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
          <VerticalStack gap="1rem">
            <Text variant="body3">Předběžná přihláška</Text>
            <Headline>{getCategoryNameByCategoryId(categoryId)}</Headline>
          </VerticalStack>

          <ApplicationForm categoryId={categoryId} />
        </MaxWidth>
      </S.ApplicationPageSection>
    </BreadcrumbsLayout>
  );
}
