import { PropsWithChildren, ReactNode } from 'react';

import { Footer, Navigation } from '~/components';

import { Header } from '~/components/Header';
import * as S from './PageLayout.style';

interface PageLayoutProps extends PropsWithChildren {
  informationBar?: ReactNode;
}

export function PageLayout({ informationBar, children }: PageLayoutProps) {
  return (
    <S.PageLayout>
      <Header>
        {informationBar}
        <Navigation />
      </Header>
      {children}
      <Footer />
    </S.PageLayout>
  );
}
