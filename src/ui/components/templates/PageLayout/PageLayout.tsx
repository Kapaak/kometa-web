import { PropsWithChildren } from 'react';

import { Footer, Navigation } from '~/components';

import { SubNavigation, SubNavigationProps } from '~/components/SubNavigation';
import * as S from './PageLayout.style';

interface PageLayoutProps extends PropsWithChildren {
  subNavigation?: SubNavigationProps;
}

export function PageLayout({ subNavigation, children }: PageLayoutProps) {
  return (
    <S.PageLayout>
      <header>
        <Navigation />
        {subNavigation && <SubNavigation {...subNavigation} />}
      </header>
      {children}
      <Footer />
    </S.PageLayout>
  );
}
