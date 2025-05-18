import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import type { SubNavigationProps } from '../SubNavigation';
import * as S from './BreadcrumbsLayout.style';

type BreadcrumbsItem = {
  label: string;
  href: string;
};

interface BreadcrumbsLayoutProps extends PropsWithChildren {
  breadcrumbs: BreadcrumbsItem[];
  subNavigation?: SubNavigationProps;
}

export function BreadcrumbsLayout({
  breadcrumbs,
  subNavigation,
  children,
}: BreadcrumbsLayoutProps) {
  return (
    <PageLayout subNavigation={subNavigation}>
      <main>
        <S.BreadcrumbsLayout>
          <MaxWidth>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </MaxWidth>
        </S.BreadcrumbsLayout>
        {children}
      </main>
    </PageLayout>
  );
}
