import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './CampsLayout.style';

interface CampsLayoutProps extends PropsWithChildren {}

export function CampsLayout({ children }: CampsLayoutProps) {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Tábory', href: '/tabory' },
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
