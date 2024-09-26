import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { Breadcrumbs } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './BlogPostLayout.style';

interface BlogPostLayoutProps extends PropsWithChildren {
  label: string;
}

export function BlogPostsLayout({ label, children }: BlogPostLayoutProps) {
  const router = useRouter();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: label, href: router.asPath },
  ];
  return (
    <PageLayout>
      <main>
        <S.BreadcrumbsWrapper>
          <S.BlogPostMaxWidth>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </S.BlogPostMaxWidth>
        </S.BreadcrumbsWrapper>
        {children}
      </main>
    </PageLayout>
  );
}
