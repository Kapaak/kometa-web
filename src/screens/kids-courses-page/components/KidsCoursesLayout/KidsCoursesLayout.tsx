import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './KidsCoursesLayout.style';

interface KidsCoursesLayoutProps extends PropsWithChildren {}

export function KidsCoursesLayout({ children }: KidsCoursesLayoutProps) {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Kurzy pro děti', href: '/kurzy-pro-deti' },
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
