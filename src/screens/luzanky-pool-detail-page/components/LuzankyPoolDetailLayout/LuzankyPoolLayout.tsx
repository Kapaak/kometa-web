import { PropsWithChildren } from 'react';

import { Breadcrumbs, MaxWidth } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './LuzankyPoolLayout.style';

interface LuzankyPoolLayoutProps extends PropsWithChildren {}

export function LuzankyPoolDetailLayout({ children }: LuzankyPoolLayoutProps) {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: 'Bazén za Lužánkami', href: '/bazeny/luzanky' },
    {
      label: 'TODO: detal (kondicni / zakladni / pokrocili / .....)',
      href: '/',
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
