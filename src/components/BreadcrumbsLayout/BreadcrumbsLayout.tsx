import { PropsWithChildren, ReactNode } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './BreadcrumbsLayout.style';

type BreadcrumbsItem = {
  label: string;
  href: string;
};

interface BreadcrumbsLayoutProps extends PropsWithChildren {
  breadcrumbs: BreadcrumbsItem[];
  informationBar?: ReactNode;
}

export function BreadcrumbsLayout({
  informationBar,
  breadcrumbs,
  children,
}: BreadcrumbsLayoutProps) {
  return (
    <PageLayout informationBar={informationBar}>
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
