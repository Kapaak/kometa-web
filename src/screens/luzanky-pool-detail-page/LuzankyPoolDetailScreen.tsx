import { useRouter } from 'next/router';
import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { getCategoryNameBySlug } from '~/utils/category';
import { AvailableLecturesContextProvider } from './contexts/AvailableLecturesContext';
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

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <AvailableLecturesContextProvider categoryId={categoryId}>
        <LuzankyDetailHeroSection />
      </AvailableLecturesContextProvider>
      <LuzankyDetailAboutSection />
      <LuzankyDetailSkillLevelSection />
      <LuzankyDetailFirstLectureSection />
    </BreadcrumbsLayout>
  );
}
