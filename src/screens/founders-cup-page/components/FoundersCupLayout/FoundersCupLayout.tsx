import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './FoundersCupLayout.style';

interface FoundersCupLayoutProps extends PropsWithChildren {}

export function FoundersCupLayout({ children }: FoundersCupLayoutProps) {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Pohár zakladatelů', href: '/souteze/pohar-zakladatelu' },
  ];

  return (
    <PageLayout>
      <S.FoundersCupLayoutSectionMain>
        <S.BreadcrumbsWrapper>
          <MaxWidth>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </MaxWidth>
        </S.BreadcrumbsWrapper>
        {children}
      </S.FoundersCupLayoutSectionMain>
    </PageLayout>
  );
}
