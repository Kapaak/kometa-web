import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import { useRouter } from 'next/router';
import { getCategoryNameBySlug } from '~/utils/category';
import * as S from './LuzankyPoolLayout.style';

interface LuzankyPoolLayoutProps extends PropsWithChildren {}

export function LuzankyPoolDetailLayout({ children }: LuzankyPoolLayoutProps) {
  const router = useRouter();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: 'Lužánky', href: '/bazeny/luzanky' },
    {
      label: getCategoryNameBySlug(router.query.categoryId as string),
      href: router.asPath,
    },
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
