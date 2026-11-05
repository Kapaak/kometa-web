import { useRouter } from 'next/router';

import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { useInfoBarStatus } from '~/hooks/useInfoBar';
import { InfoBar } from '~/ui/components/molecules/InfoBar';
import { getCategoryNameBySlug } from '~/utils/category';
import { getSwimmingPoolPath } from '~/utils/swimming-pool';

import { AvailableLecturesContextProvider } from './contexts/AvailableLecturesContext';
import { useSwimmingPoolDetailPageContext } from './contexts/SwimmingPoolDetailPageContext';

import {
  PoolDetailAboutSection,
  PoolDetailFirstLectureSection,
  PoolDetailHeroSection,
  PoolDetailSkillLevelSection,
} from './parts';

interface SwimmingPoolDetailScreenProps {
  categoryId: string;
}

export function SwimmingPoolDetailScreen({
  categoryId,
}: SwimmingPoolDetailScreenProps) {
  const router = useRouter();
  const { id, name } = useSwimmingPoolConfig();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: name, href: getSwimmingPoolPath(id) },
    {
      label: getCategoryNameBySlug(router.query.categoryId as string),
      href: router.asPath,
    },
  ];

  const { visible, toggleVisibility } = useInfoBarStatus();

  const { swimmingPool } = useSwimmingPoolDetailPageContext();

  return (
    <BreadcrumbsLayout
      breadcrumbs={breadcrumbs}
      informationBar={
        <InfoBar
          visible={visible && Boolean(swimmingPool?.infoBar?.value)}
          value={swimmingPool?.infoBar?.value ?? ''}
          onClose={toggleVisibility}
        />
      }
    >
      <AvailableLecturesContextProvider categoryId={categoryId}>
        <PoolDetailHeroSection />
      </AvailableLecturesContextProvider>
      <PoolDetailAboutSection />
      <PoolDetailSkillLevelSection />
      <PoolDetailFirstLectureSection />
    </BreadcrumbsLayout>
  );
}
