import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './LuzankyPoolLayout.style';

interface LuzankyPoolLayoutProps extends PropsWithChildren {}

export function LuzankyPoolLayout({ children }: LuzankyPoolLayoutProps) {
  const breadcrumbs = [
    { label: 'Domů - TODO UPRAVIT', href: '/' },
    // { label: 'Kurzy pro děti', href: '/kurzy-pro-deti' },
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
