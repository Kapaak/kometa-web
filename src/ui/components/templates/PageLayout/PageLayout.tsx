import { PropsWithChildren } from 'react';

import { Footer } from '~/components';

import * as S from './PageLayout.style';

interface PageLayoutProps extends PropsWithChildren {}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <S.PageLayout>
      {/* Navigation */}
      {children}
      <Footer />
    </S.PageLayout>
  );
}
