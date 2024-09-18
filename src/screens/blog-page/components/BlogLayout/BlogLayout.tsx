import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './BlogLayout.style';

interface BlogLayoutProps extends PropsWithChildren {}

export function BlogLayout({ children }: BlogLayoutProps) {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Blog', href: '/blog' },
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
