import { useRouter } from 'next/router';
import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { useInfoBarStatus } from '~/hooks/useInfoBar';
import { InfoBar } from '~/ui/components/molecules/InfoBar';
import { getCategoryNameBySlug } from '~/utils/category';
import { AvailableLecturesContextProvider } from './contexts/AvailableLecturesContext';
import { useSwimmingPoolDetailPageContext } from './contexts/SwimmingPoolDetailPageContext';
import {
  LuzankyDetailAboutSection,
  LuzankyDetailFirstLectureSection,
  LuzankyDetailHeroSection,
  LuzankyDetailSkillLevelSection,
} from './parts';

interface LuzankyPoolDetailScreenProps {
  categoryId: string;
}

export function LuzankyPoolDetailScreen({
  categoryId,
}: LuzankyPoolDetailScreenProps) {
  const router = useRouter();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: 'Lužánky', href: '/bazeny/luzanky' },
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
        <LuzankyDetailHeroSection />
      </AvailableLecturesContextProvider>
      <LuzankyDetailAboutSection />
      <LuzankyDetailSkillLevelSection />
      <LuzankyDetailFirstLectureSection />
    </BreadcrumbsLayout>
  );
}
