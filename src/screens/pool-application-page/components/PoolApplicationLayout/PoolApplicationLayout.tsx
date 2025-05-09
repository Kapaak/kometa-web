import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import { useRouter } from 'next/router';
import { getCategoryNameBySlug } from '~/utils/category';
import * as S from './PoolApplicationLayout.style';

interface PoolApplicationLayoutProps extends PropsWithChildren {}

export function PoolApplicationLayout({
  children,
}: PoolApplicationLayoutProps) {
  const router = useRouter();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    {
      label: getCategoryNameBySlug(router.query.categoryId as string),
      href: `/bazeny/luzanky/${router.query.categoryId}`,
    },
    { label: 'Přihlášky', href: router.asPath },
  ];

  return (
    <PageLayout>
      <main>
        <S.BreadcrumbsWrapper>
          <MaxWidth>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </MaxWidth>
        </S.BreadcrumbsWrapper>
        {children}
      </main>
    </PageLayout>
  );
}
